export function RSSAction() {
    return (
        <>
        <hbox
            id="noraneko-rss-feed"
            class="urlbar-page-action"
        >
            <image
                id="noraneko-rss-icon"
                class="urlbar-icon"
            />
        </hbox>
        <style class="nora-rss" jsx>
        {`
            #noraneko-rss-icon {
                list-style-image: url("./rss-icon.svg");
            }
        `}
        </style>
        </>
    );
}