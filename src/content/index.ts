chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type !== "INJECT_CODE") return;
  sendResponse({ ok: true });
  return true;
});
