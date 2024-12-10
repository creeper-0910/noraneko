(async ()=>{
  if (import.meta.env.MODE === "dev") {
    //! Do not write `features/rss/index.ts` as `features/rss`
    //! This causes HMR error
    //@ts-expect-error TS cannot find the module from http
    await (await import("http://localhost:5181/features/rss/index.ts")).default();
  } else {
    //@ts-expect-error TS cannot find the module from chrome that is inner in Firefox
    await (await import("chrome://noraneko/content/features-rss.js")).default();
  }
})();
