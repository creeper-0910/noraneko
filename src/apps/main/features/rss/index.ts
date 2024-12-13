export function init() {
    const searchRootNode = ["rdf:RDF","rss"];
    console.log("hello! rss!");
    if(document.getElementById("noraneko-rss-feed") !== null) {
        document.getElementById("noraneko-rss-feed")?.remove
    }
    if(searchRootNode.includes(document.getRootNode().documentElement.nodeName)) {
        var actionButton = document.getElementById("page-action-buttons");
        var hbox = document.createElement("hbox");
        hbox.id = "noraneko-rss-feed";
        hbox.className = "urlbar-page-action"
        var icon = document.createElement("image");
        icon.className = "urlbar-icon";
        actionButton
            .appendChild(hbox)
            .appendChild(icon);
    }
}

