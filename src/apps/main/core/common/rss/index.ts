/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 export function rssCallback() {
  console.log("callback rss!");
}
export function init() {
  console.log("hello! rss new");
  console.log(gBrowser.browsers[0].browsingContext.currentWindowContext.getActor("NRFeaturesRss"));
  gBrowser.browsers[0].browsingContext.currentWindowContext.getActor("NRFeaturesRss").callbackFunc = rssCallback;
}
