import { Table, Tag } from "antd";
import React from "react";
import { static_data } from "./staticData";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "기존유형",
    dataIndex: "colum_1",
  },
  {
    title: "신청유형",
    dataIndex: "colum_2",
  },
  {
    title: "제출서류",
    dataIndex: "colum_3",
    render: (text) => <Tag style={{ borderRadius: 20 }}>{text}</Tag>,
  },
  {
    title: "신청일시",
    dataIndex: "colum_4",
  },
  {
    title: "승인여부",
    dataIndex: "colum_5",
    render: (text) => (
      <Tag style={{ borderRadius: 20 }} color={"#DCFCE7"}>
        <span style={{ color: "#166534" }}>{text}</span>
      </Tag>
    ),
  },

  {
    title: "승인거부 사유",
    dataIndex: "colum_6",
  },
  {
    title: "승인일시",
    dataIndex: "colum_7",
  },
  {
    title: "관리자",
    dataIndex: "colum_8",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const TableMain = () => {
  const paginationConfig = {
    position: ["bottomCenter"],
  };
  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        pagination={paginationConfig}
        dataSource={static_data}
      />
    </div>
  );
};
export default TableMain;
