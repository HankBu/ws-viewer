import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
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
  state = { arrScokets: [], activeId: '', capturing: false };
  constructor(props) {
    super(props);
    props.handlers['Network.webSocketFrameReceived'] =
      this.webSocketFrameReceived.bind(this);
    props.handlers['Network.webSocketFrameSent'] =
      this.webSocketFrameSent.bind(this);
  }

  // 触发时间
  getTime(timestamp) {
    if (this._issueTime == null) {
      this._issueTime = timestamp;
      this._issueWallTime = new Date().getTime();
    }
    return new Date((timestamp - this._issueTime) * 1000 + this._issueWallTime);
  }

  webSocketFrameReceived({ requestId, timestamp, response }) {
    this.runOnceSocket({ type: 'received', requestId, timestamp, response });
  }
  webSocketFrameSent({ requestId, timestamp, response }) {
    this.runOnceSocket({ type: 'sent', requestId, timestamp, response });
  }

  clearAllScokets = () => {
    this.setState((state) => {
      return {
        ...state,
        arrScokets: [],
        activeId: null
      };
    });
  }

  handleSelectSocket = (id) => {
    this.setState((state) => {
      return {
        ...state,
        activeId: id,
      };
    });
  };

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
      requestId,
      time: this.getTime(timestamp),
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
    const { arrScokets, activeId = '' } = this.state;
    const curScoket = arrScokets.filter((item) => item.id === activeId)[0];
    return (
      <Row justify="space-between">
        <Col span={10}>
          <ScoketList
            arrScokets={arrScokets}
            clearAllScokets={this.clearAllScokets}
            handleSelectSocket={this.handleSelectSocket}
          />
        </Col>
        <Col span={14}>
          {/* {arrScokets.map((item) => {
            const { id, payloadData } = item;
            return <ReactJson key={id} src={payloadData} {...reactJsonProps} />;
          })} */}
          {
            activeId !== '' ? curScoket && curScoket.payloadData && (
              <ReactJson src={curScoket.payloadData} {...reactJsonProps} />
            ) : <section style={{paddingTop: '100px', textAlign: 'center', fontSize: '20px'}}><p>Running webScoket for left capture</p><p>Then select req or res to view data</p></section>
          }
        </Col>
      </Row>
    );
  }
}
