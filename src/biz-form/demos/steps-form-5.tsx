import * as React from 'react';
import { Card, message } from 'antd';
import {
  BizForm,
  StepsForm,
  BizFormItemInput,
  BizFormItemCaptcha,
  BizFormItemPassword
} from 'antd-more';
import { sleep } from 'ut2';

const Demo = () => {
  const [form1] = BizForm.useForm();
  const [form2] = BizForm.useForm();

  return (
    <Card
      title="忘记密码"
      extra={<a>返回登录</a>}
      style={{ width: '100%', maxWidth: 680, margin: '0 auto' }}
    >
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          // 整个表单提交时
          await sleep();
          message.success('设置新密码成功');
        }}
        stepsRender={(_, stepsDom) => (
          <div style={{ width: '80%', margin: '0 auto' }}>{stepsDom}</div>
        )}
      >
        <StepsForm.StepForm
          title="验证手机号"
          size="large"
          submitter={{
            nextButtonProps: {
              block: true
            }
          }}
          style={{ width: '75%', margin: '0 auto' }}
          requiredMark={false}
          form={form1}
          onFinish={async (values) => {
            console.log(values);
            // 验证验证码
            await sleep();
          }}
        >
          <BizFormItemInput
            name="mobile"
            type="mobile"
            placeholder="请输入11位手机号"
            label="手机号"
            required
          />
          <BizFormItemInput
            name="code"
            validateTrigger="onBlur"
            label="图形验证码"
            contentAfter={
              <img
                src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAAoAIsDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwQD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA2UAAFdPQngRhwlhAAAAABlZoZIg8ChGiAiziLCACCM8NPJEopegCJKgaKDyM/NFABVivltJwAAAAz8ly0gAHIdYAAAAAAP/EADkQAAEDAQMGCwYHAAAAAAAAAAMCBAUTAAYSAQcQICIjERQwMjM0QlJiksIVFiVyhLIXJDZDUVSi/9oACAEBAAE/ANY18oRq9KyI74XTfpRCCQlLyos0vZEujjbgKeqTYRwtCo9OmWmmcOIa3xCox9wJCfZaNvnCy50Cjntcq9jdiJg8+DlYB8dhnRvattGu39Sn1anu/OtNox8Z+EizR7tnt8xzT9C1aXfVi/JbMn+g/qSaZe8EVB0/aj8DOp0dWwr83aOUYQTTJZSbCN7q3sXLogXK4EYiPsG7qejx2L7r+7Q1xjl37fr7vo+P16nbR89oZT8kU3XKjEN9+7kHouxDvmecS8z9y1KNq7p0i9/UmZFbIGwwePKmNH5an61ptmwHI3ehBxD+FfoKs5CVdin9+ki0DHlWvmIsYf4jTTVYRUoOLc1Buf7RE9zwat/gzJ7puEQPT9vv4PB47P310l3B4kz+mai65X7GxzseO11RyoLvNkTxAkfdun/nks5GWUJliGjJq7cRpy/EeLCXUppWju7dmF5WIxCaAjJgQtgY/hpx63EGaCY0NQ5CfzS5f//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ANf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ANf/Z"
                style={{ display: 'block', height: 40, margin: 0 }}
                alt="图形验证码"
              />
            }
            required
          />
          <BizFormItemCaptcha
            name="smsCode"
            validateTrigger="onBlur"
            label="验证码"
            normalize={(val) => val.replace(/[^\d]/g, '')}
            maxLength={6}
            onGetCaptcha={async () => {
              try {
                await form1.validateFields(['mobile', 'code']);
              } catch (err) {
                message.error('请输入正确的手机号和图形验证码');
                return false;
              }

              // 发送验证码
              // const mobile = form1.getFieldValue("mobile");
              // const code = form1.getFieldValue("code");
              // return sendSms({ mobile, code }).then(() => {
              //   message.success(`短信验证码已发送至${mobile}`);
              // });

              await sleep();
            }}
            required
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          title="设置新密码"
          size="large"
          submitter={{
            noPrev: true,
            submitText: '确认',
            submitButtonProps: {
              block: true
            }
          }}
          style={{ width: '75%', margin: '0 auto' }}
          requiredMark={false}
          form={form2}
        >
          <BizFormItemPassword
            name="password"
            min={6}
            max={16}
            placeholder="6-16位密码，区分大小写"
            label="新密码"
            validateTrigger="onBlur"
            required
          />
          <BizFormItemPassword
            name="oldPassword"
            placeholder="再次输入新密码"
            dependencies={['password']}
            validateTrigger="onBlur"
            label="确定密码"
            rules={[
              {
                validator(rules, value) {
                  let errMsg = '';
                  if (!value) {
                    errMsg = '请再次输入新密码';
                  } else if (value !== form2.getFieldValue('password')) {
                    errMsg = '两次输入的密码不一致';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </Card>
  );
};

export default Demo;
