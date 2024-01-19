import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Row, Col, Space } from "antd";

const ChangeInvestment = () => {
  const [isModalOne, setModalOne] = useState(false);

  const showModal = () => {
    setModalOne(!isModalOne);
  };

  const handleOk = () => {
    setModalOne(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={showModal}
        open={isModalOne}
        title="투자유형 변경"
        width={720}
        footer={[
          <Row gutter={24} justify={"center"}>
            <Col span={12}>
              <Space style={{ width: "100%" }}>
                <Button size="large" block type="primary" onClick={showModal}>
                  저장
                </Button>
                <Button size="large" block onClick={handleOk}>
                  취소
                </Button>
              </Space>
            </Col>
          </Row>,
        ]}
        // className="modal-header"
      >
        <Form>
          <div className="form-modal">
            <div className="form-modal_container">
              <Form.Item name="username" className="form-item">
                <Input size="large" addonBefore="회원번호" />
              </Form.Item>
              <Form.Item name="username" className="form-item">
                <Input size="large" addonBefore="회원명/법인명" />
              </Form.Item>
              <Form.Item
                name="username"
                style={{ margin: 0 }}
                className="form-item"
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <div style={{ display: "flex" }}>
                  <label
                    htmlFor=""
                    className="ant-input-group-addon label-form__check"
                  >
                    예치금잔액
                  </label>
                  <div className="form-input_select">
                    <Select>
                      <Select.Option>asdasd</Select.Option>
                    </Select>
                  </div>
                </div>
              </Form.Item>

              <Form.Item
                name="username"
                style={{ margin: 0 }}
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <div style={{ display: "flex" }}>
                  <label
                    htmlFor=""
                    className="ant-input-group-addon label-form__check"
                  >
                    투자건수
                  </label>
                  <div className="form-input_check">
                    <Button>asdasd</Button>
                  </div>
                </div>
              </Form.Item>
            </div>
            <ul className="ul-modal">
              <li>
                <span>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</span>
              </li>
              <li>
                <span>최대 10개, 100MB까지 등록이 가능합니다.</span>
              </li>
            </ul>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ChangeInvestment;
