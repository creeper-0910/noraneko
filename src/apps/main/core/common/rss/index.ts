/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 import { render } from "@nora/solid-xul";
import { RSSAction } from "./rss";
export function init() {
    console.log("[nor@rss] Init")
    Services.obs.addObserver((aSubject, aTopic, aData)=>{
    console.log("[nor@rss] Received:\n"+aData);
    render(RSSAction, document.getElementById("page-action-buttons")?.firstElementChild, {
        hotCtx: import.meta.hot,
    });
    fetch(JSON.parse(aData).href).then((res) => {

    })
    },"nor@rss:foo");
}