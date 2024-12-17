export function RSSAction() {
    return (
        window.MozXULElement.parseXULToFragment(`
         <hbox id="rssPageAction" data-l10n-id="rss-page-action"
     class="urlbar-page-action" tooltiptext="rss-page-action"
     role="button" popup="rss-panel">
     <image id="rssPageAction-image" class="urlbar-icon"/>
     <panel id="rss-panel" type="arrow" position="bottomright topright" onpopupshowing="gSsbSupport.functions.setImageToInstallButton();">
     <vbox id="rss-box">
       <hbox id="rss-content-hbox">
        <vbox id="rss-content-label-vbox">
        <html:h2>
          <label id="rss-content-label">"https://example.com/"のRSSを受信しますか？</label>
         </html:h2>
         <description id="rss-content-description">通知やホームで最新情報を受け取ることができます。</description>
        </vbox>
       </hbox>
       <hbox id="rss-button-hbox">
        <button id="rss-app-install-button" class="panel-button rss-install-buttons" oncommand="gFloorpPageAction.Ssb.onCommand()">受け取る</button>
        <button id="rss-app-cancel-button" class="panel-button rss-install-buttons" data-l10n-id="rss-app-cancel-button" oncommand="gFloorpPageAction.Ssb.closePopup()">キャンセル</button>
        </hbox>
      </vbox>
     </panel>
    </hbox>
    `)
      );
}