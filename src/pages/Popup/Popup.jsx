import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
// import Panel from 'react-flex-panel';
// import FontAwesome from 'react-fontawesome';
import ReactJson from 'react-json-view';
import ScoketList from './component/ScoketList';
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
  state = { arrScokets: [], activeId: null, capturing: false };
  constructor(props) {
    super(props);
    props.handlers['Network.webSocketFrameReceived'] =
      this.webSocketFrameReceived.bind(this);
    props.handlers['Network.webSocketFrameSent'] =
      this.webSocketFrameSent.bind(this);
  }

  webSocketFrameReceived({ requestId, timestamp, response }) {
    this.runOnceSocket({ type: 'received', requestId, timestamp, response });
  }
  webSocketFrameSent({ requestId, timestamp, response }) {
    this.runOnceSocket({ type: 'sent', requestId, timestamp, response });
  }

  runOnceSocket({ type, requestId, timestamp, response }) {
    let { opcode, payloadData } = response;
    if (opcode === 1 || opcode === 2) {
      // JSON
      if (opcode === 1) {
        try {
          payloadData = JSON.parse(payloadData);
        } catch (err) {
          console.err(err);
        }
      }
    }
    const onceScoket = {
      id: ++this._uniqueId,
      type,
      payloadData,
    };
    this.setState((state) => {
      const { arrScokets } = state;
      return {
        ...state,
        arrScokets: [...arrScokets, onceScoket],
      };
    });
  }

  render() {
    const { arrScokets, activeId } = this.state;
    return (
      <Row justify="space-between">
        <Col span={8}>
          <ScoketList arrScokets={arrScokets} />
        </Col>
        <Col span={16}>
          {arrScokets.map((item) => {
            const { id, payloadData } = item;
            return <ReactJson key={id} src={payloadData} {...reactJsonProps} />;
          })}
        </Col>
      </Row>
    );
  }
}
