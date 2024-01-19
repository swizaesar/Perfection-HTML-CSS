import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Checkbox,
  Row,
  Space,
  Col,
} from "antd";

const RefusingApproval = () => {
  const [isModalTwo, setModalTwo] = useState(false);

  const showModal = () => {
    setModalTwo(!isModalTwo);
  };

  const handleOk = () => {
    setModalTwo(false);
  };

  const handleCancel = () => {
    setModalTwo(!isModalTwo);
  };

  var data = [
    { label: "서류 식별 불가" },
    { label: "필수 서류 누락" },
    { label: "서류의 내용이 등록된 회원정보와 다름" },
    {
      label:
        "서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)",
    },
    { label: "서류의 유효기간이 초과됨" },
    { label: "직접 입력" },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={handleCancel}
        open={isModalTwo}
        title="승인거부 사유 입력"
        width={720}
        footer={[
          <Row gutter={24} justify={"center"}>
            <Col span={12}>
              <Space style={{ width: "100%" }}>
                <Button
                  size="large"
                  block
                  type="primary"
                  onClick={handleCancel}
                >
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
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <div style={{ display: "flex" }}>
                  <label
                    htmlFor=""
                    className="ant-input-group-addon label-form__check"
                  >
                    블랙리스트 사유
                  </label>
                  <div className="form-input_check">
                    {data?.map((item, key) => {
                      return (
                        <div>
                          <Checkbox key={key}>{item?.label}</Checkbox>
                        </div>
                      );
                    })}
                    <Input.TextArea
                      style={{ height: 100 }}
                      className="input-modal_check"
                      placeholder="사유 입력"
                    />
                  </div>
                </div>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RefusingApproval;
