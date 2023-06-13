/**
 * title: 异步初始值
 * desc: |
 *      可通过 `ready` 控制表单是否已准备好（如表单的初始值需要通过异步获取）。
 */
import * as React from 'react';
import { BizForm, BizFormItemInput } from 'antd-more';
import { sleep } from 'ut2';

async function getNameApi() {
  await sleep(2000);
  return '李四';
}

const Demo = () => {
  const [ready, setReady] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState({ name: '张三' });

  React.useEffect(() => {
    getNameApi().then((name) => {
      setInitialValues({ name });
      setReady(true);
    });
  }, []);

  return (
    <BizForm
      name="form-async-initial-values"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      ready={ready}
      initialValues={initialValues}
    >
      <BizFormItemInput label="姓名" name="name" />
    </BizForm>
  );
};

export default Demo;
