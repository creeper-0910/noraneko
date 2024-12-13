export class NRFeaturesRssParent extends JSWindowActorParent {
  callbackFunc: ((url: string) => void) | undefined;
  async receiveMessage(message: ReceiveMessageArgument) {
    switch (message.name) {
      case "FeatureRss:isRssSite" : {
        const d = message.data;
        console.log(d);
        Services.obs.notifyObservers(null,"nor@rss:foo",JSON.stringify(d));
        break;
      }
    }
  }
}