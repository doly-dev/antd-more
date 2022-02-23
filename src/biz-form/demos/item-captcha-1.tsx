import * as React from 'react';
import { BizForm } from 'antd-more';
import waitTime from '../../utils/waitTime';

const { ItemCaptcha } = BizForm;

async function sendCode() {
  await waitTime();
  return true;
}

const Demo = () => {
  // const buttonRef = React.useRef<HTMLButtonElement>(null);

  // React.useEffect(() => {
  //   if (buttonRef.current) {
  //     buttonRef.current.click();
  //   }
  // }, []);

  return (
    <BizForm
      name="form-item-captcha-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={98}
    >
      <ItemCaptcha label="验证码1" name="captcha1" onGetCaptcha={sendCode} />
      <ItemCaptcha label="内联验证码2" name="captcha2" type="inline" onGetCaptcha={sendCode} />
      <ItemCaptcha label="验证码3" name="captcha3" second={120} onGetCaptcha={sendCode} required />
      {/* <ItemCaptcha
        label="自动触发"
        name="captcha4"
        onGetCaptcha={sendCode}
        buttonProps={{ ref: buttonRef }}
        required
      /> */}
      <ItemCaptcha
        label="自定义文本"
        name="captcha4"
        onGetCaptcha={async () => {
          // try {
          //   // 验证手机号码或邮箱是否正确
          //   await form.validateFields(["mobile"]);
          // } catch (err) {
          //   message.error("请输入正确的手机号码");
          //   return false;
          // }

          // 发送验证码
          // return sendCaptcha(form.getFieldValue("mobile"));
          return sendCode();
        }}
        required
        initText="初始文本"
        runText="倒计时%ss"
        resetText="重新倒计时"
        inputProps={{
          placeholder: '6位数验证码',
          maxLength: 6
        }}
      />
    </BizForm>
  );
};

export default Demo;
