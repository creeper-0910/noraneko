
export class NRFeaturesRssParent extends JSWindowActorParent {
  callbackFunc: ((url: string) => void) | undefined;
  async receiveMessage(message: ReceiveMessageArgument) {
    switch (message.name) {
      case "FeatureRss:isRssSite" : {
        const d = message.data as string;
        console.log(d);
        if(this.callbackFunc !== undefined) {
          this.callbackFunc(d);
        } else {
          console.log("undefined rss");
        }
        break;
      }
    }
  }
}
