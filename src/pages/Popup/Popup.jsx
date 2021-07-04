import React, { useState, useEffect } from 'react';
import Panel from 'react-flex-panel';
import FontAwesome from 'react-fontawesome';
// import { ObjectInspector } from 'react-inspector';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

// const Popup = (handlers) => {
//   const [uniqueId, setUniqueId] = useState(0);
//   const [sendList, setSendList] = useState([]);
//   const [resList, setResList] = useState([]);
//   /**
//    * Function
//    */
//   const handleSendReceive = ({ type, time, result }) => {
//     const { response } = result;
//     let { opcode, payloadData } = response;
//     if (opcode === 1 || opcode === 2) {
//       setUniqueId(uniqueId + 1);
//       // JSON
//       if (opcode === 1) {
//         try {
//           payloadData = JSON.parse(payloadData);
//         } catch (err) {
//           payloadData = undefined;
//           console.log(err);
//         }
//       }
//     }
//     console.log(type, payloadData);
//   };

//   const doGet = (params) => {
//     console.log(params);
//   };

//   // handlers['Network.webSocketFrameSent'] = doGet;
//   // handlers['Network.webSocketFrameReceived'] = doGet;
//   // Object.preventExtensions(handlers);

//   return (
//     <div className="App">
//       <header className="App-header">asdfasf</header>
//       <Greetings />
//     </div>
//   );
// };

// export default Popup;

export default class Popup extends React.Component {
  _uniqueId = 0;
  state = { frames: [], activeId: null, capturing: false };
  constructor(props) {
    super(props);
    props.handlers[
      'Network.webSocketFrameReceived'
    ] = this.webSocketFrameReceived.bind(this);
    props.handlers['Network.webSocketFrameSent'] = this.webSocketFrameSent.bind(
      this
    );
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
          // rtnData = JSON.parse(rtnData);
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
      <div className="App">
        {frames.map((item) => {
          const { id, rtnData } = item;
          return <div key={id}>1111{rtnData}</div>;
          // return <ObjectInspector data={item.rtnData} />;
        })}
      </div>
    );
  }
}
