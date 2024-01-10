import * as React from 'react';
import { Col, Row } from 'antd';
import { BizForm, BizFormItemInput, BizFormItemUpload } from 'antd-more';
import { sleep } from 'ut2';
import { uploadFile } from './services';
import { uploadFileToFssid } from './utils/fileUtils';

const Demo = () => {
  return (
    <BizForm
      name="label-width"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      labelWidth={98}
      hideLabel
      // labelCol={{
      //   span: 8
      // }}
    >
      <Row>
        <Col>
          <BizFormItemUpload
            name="images"
            label="图片"
            type="image"
            maxCount={9}
            required
            onUpload={uploadFile}
            transform={uploadFileToFssid}
          />
        </Col>
        <Col>
          <a>删除</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <BizFormItemInput label="名称1" name="name1" labelWidth={false} />
        </Col>
        <Col>
          <a>修改</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <BizFormItemInput label="名称2" name="name2" labelWidth="auto" />
        </Col>
        <Col>
          <a>修改</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <BizFormItemInput label="名称3" name="name3" hideLabel={false} />
        </Col>
        <Col>
          <a>修改</a>
        </Col>
      </Row>
    </BizForm>
  );
};

export default Demo;
