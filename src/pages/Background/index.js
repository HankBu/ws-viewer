console.log('This is the background page.');
console.log('Put the background scripts here.');

const inspectors = [];
// 当窗口移除（关闭）时产生
chrome.windows.onRemoved.addListener(id => {
  const pos = inspectors.findIndex(({ popup }) => popup.id === id);
  if (pos >= 0) {
    // 如果关闭的窗口正好是当前的 tab，触发调试器脱离指定目标
    if (inspectors[pos].active) {
      chrome.debugger.detach({ tabId: inspectors[pos].id });
    }
    inspectors.splice(pos, 1);
    console.log(`removed window ${id}`)
  }
});
chrome.debugger.onDetach.addListener(({ tabId }) => {
  const inspector = inspectors.find(({ id }) => id === tabId);
  if (inspector) {
    inspector.active = false;
  }
});


chrome.action.onClicked.addListener(tab => {
  const { id: tabId } = tab;
  const inspector = inspectors.find(({ id }) => id === tabId);
  if (inspector && inspector.active) {
    chrome.windows.update(inspector.popup.id, { focused: true });
  } else {
    /**
     * attach 开启浏览器调试，监控 tabId 目标tab，弹出xxx已开始调试此浏览器
     */
    chrome.debugger.attach({ tabId }, '1.0', () => {
      // 错误提示
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        console.log(`Start attach tabId:${tabId}`);
      }
      // 必须开启这个 Network.enable 才能监听 network 的一系列指令，血泪教训
      // 只有这样才能监听 message 是 Network 打头的
      chrome.debugger.sendCommand({ tabId }, "Network.enable", null, () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log("Network enabled");
        }
      });
      // 监控弹窗
      const inspector = inspectors.find(({ id }) => id === tabId);
      if (inspector) {
        inspector.active = true;
        chrome.windows.update(inspector.popup.id, { focused: true });
      } else {
        // 创建监控弹窗
        chrome.windows.create({ url: `popup.html?${tabId}`, type: "popup", width: 800, height: 600 }, wnd => {
          inspectors.push({ id: tabId, popup: wnd, active: true });
        });
      }
    });
  }
});