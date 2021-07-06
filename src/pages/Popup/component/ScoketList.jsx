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
      title: 'Req / Res',
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
      title: 'Length',
      dataIndex: 'payloadData',
      key: 'payloadData',
      width: '70px',
      render: (item) => {
        return <>{JSON.stringify(item).length}</>;
      },
    },
    {
      title: 'Time',
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
      <Row>

      </Row>
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
        // 奇技淫巧
        rowClassName={(record)=>{
          return record.id === selectedRowKeys[0] ? 'ant-table-row-selected' : ''
        }}
        // rowSelection={{
        //   type: 'radio',
        //   selectedRowKeys,
        // }}
      />
    </>
  );
};

export default Comp;
