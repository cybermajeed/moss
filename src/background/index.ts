chrome.runtime.onMessage.addListener(async (msg) => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: (userCode) => {
      console.log(userCode);
    },
    args: [msg.code],
  });
});
