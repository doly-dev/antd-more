import * as React from 'react';
import { Col, Row } from 'antd';
import { BizForm, BizFormItem } from 'antd-more';
import { uploadFile } from '../../biz-form/demos/services';
import ItemUploadCertificate from '../components/ItemUploadCertificate';
import styles from './style.module.less';

function Demo() {
  return (
    <BizForm
      labelWidth={98}
      onFinish={(values) => {
        console.log(values);
      }}
      style={{ width: 698 }}
    >
      <ItemUploadCertificate
        label="营业执照"
        name="socialCreditCard"
        idType="businessLicense"
        onUpload={uploadFile}
      />
      <ItemUploadCertificate
        label="商业登记证BR"
        name="businessRegistry"
        idType="businessRegistry"
        onUpload={uploadFile}
      />
      <BizFormItem label="身份证" tooltip="正反面都是单张块级" style={{ marginBottom: 0 }}>
        <Row gutter={24}>
          <Col span={12}>
            <ItemUploadCertificate
              label="身份证人像面"
              hideLabel
              name="idCardFront"
              idType="idCardFront"
              onUpload={uploadFile}
              block
            />
          </Col>
          <Col span={12}>
            <ItemUploadCertificate
              label="身份证国徽面"
              hideLabel
              name="idCardBack"
              idType="idCardBack"
              onUpload={uploadFile}
              block
            />
          </Col>
        </Row>
      </BizFormItem>
      <ItemUploadCertificate
        label="护照"
        name="passport"
        idType="passport"
        tooltip="自定义宽度，最多2张"
        onUpload={uploadFile}
        title="上传护照"
        maxCount={2}
        className={styles.customUpload}
      />
      <ItemUploadCertificate
        label="授权书"
        name="authorization"
        idType="authorization"
        onUpload={uploadFile}
      />
    </BizForm>
  );
}

export default Demo;
