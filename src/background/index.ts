chrome.runtime.onMessage.addListener(async (msg) => {
  console.log("BACKGROUND LOADED");
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  console.log("msgc: ", msg.code);

  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    world: "MAIN",
    func: (src: string) => {
      (0, eval)(src);
    },
    args: [msg.code],
  });
});
