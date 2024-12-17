import { BrowserActionUtils } from "@core/utils/browser-action";
import { RSSAction } from "./rss";

const { CustomizableUI } = ChromeUtils.importESModule(
  "resource:///modules/CustomizableUI.sys.mjs",
);

export class gNoranekoRssManager {
  private static instance: gNoranekoRssManager;
  public static getInstance() {
    if (!gNoranekoRssManager.instance) {
      gNoranekoRssManager.instance = new gNoranekoRssManager();
    }
    return gNoranekoRssManager.instance;
  }


  constructor() {
    BrowserActionUtils.createMenuToolbarButton(
      "rss-manager",
      "rss-manager",
      "rss-manager-popup",
      <RSSAction />,
      null,
      null,
      CustomizableUI.AREA_NAVBAR,
      null,
      15,
    );
  }
}