import React, { useCallback, useState, useRef } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { isMobile } from 'util-helpers';
import { useAsync } from 'rc-hooks';
import { CaptchaButton } from 'antd-more';

// 接口：发送短信验证码
function asyncSendVerificationCode() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          requestId: 'abcdefg',
        },
      });
    }, 1000);
  });
}

interface VerificateCodeInputProps {
  mobileField?: string;
  form?: FormInstance;
  value?: any;
  onChange?: (value: any) => void;
}

// 组件：验证码和获取验证码按钮
function VerificateCodeInput({
  mobileField = 'mobile',
  form,
  value,
  onChange = () => { },
}: VerificateCodeInputProps) {
  const inputRef = useRef(null);
  const [start, setStart] = useState(false); // 倒计时按钮状态

  const { run, loading } = useAsync(asyncSendVerificationCode, { autoRun: false });

  const triggerChange = (changeValue) => {
    onChange({ ...value, ...changeValue });
  };

  const onCodeBlur = () => {
    form.validateFields(['code', 'validateCode']);
  };

  const onCodeChange = (e) => {
    triggerChange({ validateCode: e.target.value });
  };

  const onButtonClick = () => {
    // 校验手机号码
    form.validateFields([mobileField]).then((values) => {
      return run({ mobile: values[mobileField] }).then((res) => {
        triggerChange({ requestId: res.data.requestId });
        setStart(true);
        inputRef.current.focus();
      });
    });
  };

  const handleEnd = useCallback(() => {
    setStart(false);
  }, []);

  return (
    <Row gutter={8}>
      <Col span={16}>
        <Input
          placeholder="请输入验证码"
          onChange={onCodeChange}
          onBlur={onCodeBlur}
          value={value.validateCode}
          maxLength={6}
          allowClear
          ref={inputRef}
        />
      </Col>
      <Col span={8}>
        <CaptchaButton
          start={start}
          onClick={onButtonClick}
          onEnd={handleEnd}
          block
          loading={loading}
        />
      </Col>
    </Row>
  );
}

// 初始值
const initialValues = {
  mobile: '',
  code: {
    requestId: '',
    validateCode: '',
  },
};

// 规整化参数
const normalizeValues = ({ mobile, code: { validateCode, requestId } }) => {
  return {
    mobile,
    validateCode,
    requestId,
  };
};

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const buttonItemLayout = {
  wrapperCol: { sm: { offset: 5 }, span: 16 },
};

export default () => {
  const [form] = Form.useForm();
  const [params, setParams] = useState(() => normalizeValues(initialValues));

  const onFinish = useCallback((values) => {
    setParams(normalizeValues(values));
  }, []);

  return (
    <>
      <Form {...formItemLayout} onFinish={onFinish} form={form} initialValues={initialValues}>
        <Form.Item
          label="手机号码"
          name="mobile"
          validateFirst
          validateTrigger="onBlur"
          required
          rules={[
            {
              validator: (rule, value) => {
                let errMsg = '';

                if (!value) {
                  errMsg = '请输入手机号码';
                } else if (!isMobile(value)) {
                  errMsg = '请输入正确的手机号码';
                }

                if (errMsg) {
                  return Promise.reject(errMsg);
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Input placeholder="请输入手机号码" allowClear />
        </Form.Item>
        <Form.Item
          name="code"
          label="验证码"
          validateFirst
          validateTrigger="onBlur"
          required
          rules={[
            {
              validator(rule, value) {
                let errMsg = '';
                if (!value.requestId) {
                  errMsg = '请点击获取验证码并输入';
                } else if (!value.validateCode) {
                  errMsg = '请输入验证码';
                }
                if (errMsg) {
                  return Promise.reject(errMsg);
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <VerificateCodeInput form={form} />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
      <div>params: {JSON.stringify(params)}</div>
    </>
  );
};
