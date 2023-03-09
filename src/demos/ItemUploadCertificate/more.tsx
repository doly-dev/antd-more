import * as React from 'react';
import { BizForm } from 'antd-more';
import ImageIdCardPersonal from '../components/ItemUploadCertificate/assets/idcard-personal.jpg';
import { uploadFile } from '../../biz-form/demos/services';
import ItemUploadCertificate from '../components/ItemUploadCertificate';
import styles from './style.module.less';

function Demo() {
  return (
    <BizForm
      labelWidth={154}
      onFinish={values => {
        console.log(values);
      }}
    >
      <ItemUploadCertificate
        label='年检证书/存续证明'
        name='aicOrCogFiles'
        tooltip='不限数量'
        onUpload={uploadFile}
        popoverProps={{
          title: '年检证书/存续证明',
          content: (
            <div>
              <div style={{ color: '#696', marginBottom: 5 }}>至少需上传下方一个材料：</div>
              <ul style={{ listStyle: 'disc', padding: '0 0 0 20px', margin: 0 }}>
                <li>年检证书(Annual Inspection Certificate)</li>
                <li>存续证明(Certificate of Goodstanding)</li>
              </ul>
            </div>
          )
        }}
        maxCount={Infinity}
      />
      <ItemUploadCertificate
        label='董事册/股东名册'
        name='rodOrRomFiles'
        tooltip='不限数量'
        onUpload={uploadFile}
        popoverProps={{
          title: '董事册/股东名册',
          content: (
            <div>
              <div style={{ color: '#696', marginBottom: 5 }}>至少需上传下方一个材料：</div>
              <ul style={{ listStyle: 'disc', padding: '0 0 0 20px', margin: 0 }}>
                <li>董事册(Register of Directors)</li>
                <li>股东名册(Register of Members)</li>
              </ul>
            </div>
          )
        }}
        maxCount={Infinity}
      />
      <ItemUploadCertificate
        label='公司章程'
        name='aoaOrCoiFiles'
        tooltip='不限数量'
        onUpload={uploadFile}
        popoverProps={{
          title: '公司章程',
          content: (
            <div>
              <ul style={{ listStyle: 'disc', padding: '0 0 0 20px', margin: 0 }}>
                <li>公司章程(Articles of Association)</li>
              </ul>
              <div style={{ color: '#696', margin: '10px 0 5px' }}>若没有「公司章程」，也可提供下方材料：</div>
              <ul style={{ listStyle: 'disc', padding: '0 0 0 20px', margin: 0 }}>
                <li>董事在职证明或代理人注册证书(Certificate of Incumbency)</li>
              </ul>
            </div>
          )
        }}
        maxCount={Infinity}
      />
      <ItemUploadCertificate
        label='身份证件'
        name='idField'
        tooltip='自定义宽度，图标/标题，最多2张，没有浮层提示'
        onUpload={uploadFile}
        title='上传身份证件'
        icon={<img src={ImageIdCardPersonal} alt='' />}
        maxCount={2}
        className={styles.customUpload}
      />
    </BizForm>
  );
}

export default Demo;
