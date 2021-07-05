import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const Comp = ({ arrScokets, handleClickSocket }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    handleClickSocket(selectedRowKeys[0]);
  }, [selectedRowKeys, handleClickSocket]);

  const columns = [
    {
      title: '请求/返回',
      dataIndex: 'type',
      key: 'type',
      ellipsis: true,
      render: (text, record) => {
        const { payloadData } = record;
        return (
          <>
            {text === 'sent' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            <span style={{ margin: '0 0 0 5px' }}>
              {JSON.stringify(payloadData)}
            </span>
          </>
        );
      },
    },
    {
      title: '长度',
      dataIndex: 'payloadData',
      key: 'payloadData',
      width: '50px',
      render: (item) => {
        return <>{JSON.stringify(item).length}</>;
      },
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: '120px',
      render: (item) => {
        const padded = (num, d) => num.toFixed(0).padStart(d, '0');
        const h = item.getHours();
        const m = item.getMinutes();
        const s = item.getSeconds();
        const ms = item.getMilliseconds();
        return (
          <span className="timestamp">
            {padded(h, 2)}:{padded(m, 2)}:{padded(s, 2)}.{padded(ms, 3)}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        dataSource={arrScokets}
        columns={columns}
        bordered
        pagination={false}
        size="small"
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedRowKeys([record.id]);
            },
          }
        }}
        rowSelection={{
          type: 'radio',
          columnWidth: 0,
          selectedRowKeys,
        }}
      />
    </>
  );
};

export default Comp;
