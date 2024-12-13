export class NRFeaturesRssChild extends JSWindowActorChild {
  handleEvent(event) {
    var url = this.document.location.href;
    console.log(this.document.location.href);
    if (url != null && event.type === "DOMContentLoaded" && !url.startsWith('about:')) {
      this.sendAsyncMessage("FeatureRss:isRssSite", url);
    }
  }
}
