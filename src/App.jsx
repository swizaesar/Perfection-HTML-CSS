import React, { useState } from "react";
import {
  Col,
  Divider,
  Form,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Button,
} from "antd";
import TableMain from "./components/table";
import ChangeInvestment from "./components/modal/ChangeInvestment";
import RefusingApproval from "./components/modal/RefusingApproval";

import "./App.css";
// rowSelection object indicates the need for row selection

const App = () => {
  return (
    <div>
      <div className="header-top">
        <Row gutter={24} justify="space-between" align={"middle"}>
          <Col span={4}>
            <div>
              <b>신청 목록</b>{" "}
              <span className="header-top__left">
                (총 100명 | 승인대기 1건)
              </span>
            </div>
          </Col>
          <Col span={8}>
            <Row gutter={24} justify="space-between">
              <Col span={8}>
                <Select placeholder="Select" className="select-table_select">
                  <Select.Option value="승인여부 전체">
                    승인여부 전체
                  </Select.Option>
                  <Select.Option value="승인대기">승인대기</Select.Option>
                  <Select.Option value="승인완료">승인완료</Select.Option>
                  <Select.Option value="승인거부">승인거부</Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                <Select placeholder="Select" className="select-table_select">
                  <Select.Option>asd</Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                <Select placeholder="Select" className="select-table_select">
                  <Select.Option>asd</Select.Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="header-bottom">
        <Row gutter={24} justify="space-between">
          <Col span={4}>
            <Button type="primary">등록</Button>
          </Col>
          <Col span={8}>
            <Row gutter={24} align="middle" justify="end">
              <Col span={5}>
                <span>선택한 0건</span>
              </Col>
              <Col span={8}>
                <Select placeholder="Select">
                  <Select.Option>asd</Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                <Button type="primary" block>
                  저장
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <TableMain />
      <ChangeInvestment />
      <RefusingApproval />
    </div>
  );
};
export default App;
