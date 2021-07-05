import React, { useState, useEffect } from 'react';
import Panel from 'react-flex-panel';
import FontAwesome from 'react-fontawesome';
import ReactJson from 'react-json-view';
import './Popup.css';

const reactJsonProps = {
  indentWidth: 2,
  name: false,
  enableClipboard: false,
  displayObjectSize: false,
  displayDataTypes: false,
};

export default class Popup extends React.Component {
  _uniqueId = 0;
  state = { frames: [], activeId: null, capturing: false };
  constructor(props) {
    super(props);
    props.handlers['Network.webSocketFrameReceived'] =
      this.webSocketFrameReceived.bind(this);
    props.handlers['Network.webSocketFrameSent'] =
      this.webSocketFrameSent.bind(this);
  }

  webSocketFrameReceived({ timestamp, response }) {
    this.addFrame('incoming', timestamp, response);
  }
  webSocketFrameSent({ timestamp, response }) {
    this.addFrame('outgoing', timestamp, response);
  }

  addFrame(type, timestamp, response) {
    const { opcode, payloadData } = response;
    let rtnData = payloadData;
    if (opcode === 1 || opcode === 2) {
      if (opcode === 1) {
        try {
          rtnData = JSON.parse(rtnData);
        } catch (err) {
          console.err(err);
        }
      }
    }

    const frame = {
      id: ++this._uniqueId,
      type,
      rtnData,
    };
    this.setState((state) => {
      const { frames } = state;
      return {
        ...state,
        frames: [...frames, frame],
      };
    });
  }

  render() {
    const { frames, activeId } = this.state;
    console.log(frames);
    return (
      <Panel cols className="App">
        <Panel resizable style={{ borderRight: '1px solid #CCC' }}>
          
        </Panel>
        <Panel>
          {frames.map((item) => {
            const { id, rtnData } = item;
            return <ReactJson src={rtnData} {...reactJsonProps} />;
          })}
        </Panel>
      </Panel>
    );
  }
}
