import type { FormInstance } from 'antd';
import type { NamePath } from 'antd/es/form/interface';
import { validatePassword as baseValidatePassword } from 'util-helpers';

type Validator = (rule: any, value: any) => Promise<void | any>;

// 验证密码
export const validatePassword: Validator = (rule, value) => {
  let errMsg = '';

  if (value) {
    if (value.length < 8 || value.length > 16) {
      errMsg = '密码长度8～16个字符';
    } else {
      const result = baseValidatePassword(value);
      if (
        !(result.containes.lowerCaseLetter || result.containes.upperCaseLetter) ||
        !result.containes.number
      ) {
        errMsg = '必须包含字母+数字';
      }
    }
  }

  if (errMsg) {
    return Promise.reject(errMsg);
  }
  return Promise.resolve();
};

// 验证新密码，且不能与原密码一致
export const wrapperValidateNewPassword = (
  form: FormInstance,
  oldPwdNamePath: NamePath = 'password'
) => {
  const validateNewPwd: Validator = (rule, value) => {
    let errMsg = '';
    const oldPwd = form.getFieldValue(oldPwdNamePath);
    if (oldPwd && oldPwd === value) {
      errMsg = '新密码不能与原密码一致';
    } else {
      return validatePassword(rule, value);
    }
    if (errMsg) {
      return Promise.reject(errMsg);
    }

    return Promise.resolve();
  };
  return validateNewPwd;
};

// 验证确认新密码
export const wrapperValidateRepeatPassword = (
  form: FormInstance,
  pwdNamePath: NamePath = 'password'
) => {
  const validateRepeatPwd: Validator = (rule, value) => {
    let errMsg = '';
    if (!value) {
      errMsg = '请再次输入新密码';
    } else if (value !== form.getFieldValue(pwdNamePath)) {
      errMsg = '两次输入的密码不一致';
    }

    if (errMsg) {
      return Promise.reject(errMsg);
    }
    return Promise.resolve();
  };
  return validateRepeatPwd;
};
