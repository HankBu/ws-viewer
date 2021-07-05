import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import './index.css';
/**
 * 获取当前标签页ID
 */
// function getCurrentTabId(callback) {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     if (callback) callback(tabs.length ? tabs[0].id : null);
//   });
// }

// 前面的 url: "popup.html?" + tabId
const tabId = parseInt(window.location.search.substr(1));
const handlers = {};

/**
 * Event
 */
/**
 * 必须写在这里，否则写在popup.jsx里面会导致曾经请求的也会被再次请求
 * onEvent 回调函数中通过标签页标识符(tabId)分发事件
 */
chrome.debugger.onEvent.addListener((debuggeeId, message, params) => {
  if (debuggeeId.tabId !== tabId) return;
  //   // 发送
  //   if (message === 'Network.webSocketFrameSent') {
  //     handlers[message](params);
  //   }
  //   // 回收
  //   if (message === 'Network.webSocketFrameReceived') {
  //     handlers[message](params);
  //   }
  if (handlers[message]) {
    handlers[message](params);
  }
});

render(
  <Popup handlers={handlers} />,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
