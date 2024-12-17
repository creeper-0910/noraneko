/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { render } from "@nora/solid-xul";
import { RSSAction } from "./rss";
export function init() {
    console.log("[nor@rss] Init")
    render(RSSAction, document.getElementById("page-action-buttons")?.firstElementChild, {
      hotCtx: import.meta.hot,
  });
    Services.obs.addObserver((aSubject, aTopic, aData)=>{
    console.log("[nor@rss] Received:\n"+aData);
    fetchRSS(JSON.parse(aData).href);
    },"nor@rss:foo");
}

function fetchRSS(url: string) {
    fetch(url).then((res) => res.text())
    .then((data) => {
           const parseData = parseXML(data);
           if(parseData != null) {
               console.log(parseData);
               const rssKey = Object.keys(parseData)[0];
               const rssTitle = parseData[rssKey]["channel"]["title"]["$text"];
               let rssData = {};
               rssData[rssTitle] = {};
               switch(rssKey) {
                   case "rdf:RDF":
                       parseData[rssKey]["item"].forEach(itemData => {
                           rssData[rssTitle][itemData["title"]["$text"]] = {};
                           rssData[rssTitle][itemData["title"]["$text"]]["link"] = itemData["link"]["$text"];
                           rssData[rssTitle][itemData["title"]["$text"]]["date"] = itemData["dc:date"]["$text"];
                       });
                       break;
                   case "rss":
                       break;
               }
               console.log(rssData);
               return rssData;
           }
           return null;
    })
    .catch(error => {
        console.error("[nor@rss] Err:\n"+error);
        return null;
    })
}

function parseXML(xml: string) {
  const parser = new DOMParser();
  const xmldoc = parser.parseFromString(xml,"text/xml");

  if (xmldoc.documentElement) {
    return {[xmldoc.documentElement.nodeName]:_parseXMLElement(xmldoc.documentElement)};
  } else {
    return null;
  }
}

function _parseXMLElement(elem: Element) {
  const attrList: Record<string,string> = {};
  if (elem.attributes) {
    for (let i = 0; i < elem.attributes.length; i++) {
      const attr = elem.attributes.item(i)!;
      attrList[attr.name] = attr.value;
    }
  }
  let ret: Record<string,object | string> = {}
  if (Object.keys(attrList).length !== 0) {
    ret = {...ret,$attr:attrList};
  }
  if (elem.children.length) {
    for (const child of elem.children) {
      if (Object.keys(ret).includes(child.nodeName)) {
        if (Array.isArray(ret[child.nodeName])) {
          ret[child.nodeName] = [...(ret[child.nodeName] as Array<unknown>),_parseXMLElement(child)];
        } else {
          ret[child.nodeName] = [ret[child.nodeName],_parseXMLElement(child)];
        }
      } else {
        ret[child.nodeName] = _parseXMLElement(child);
      }
    }
  } else {
    ret["$text"] = elem.textContent ?? "";
  }
  return ret;
}