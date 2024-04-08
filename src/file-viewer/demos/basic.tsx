import * as React from 'react';
import { Button } from 'antd';
import { FileViewer } from 'antd-more';

function Demo() {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setVisible1(true)}>预览图片-UploadFile</Button>
      <Button onClick={() => setVisible2(true)}>预览图片-url</Button>
      <FileViewer
        file={{
          uid: '-1',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          name: '图片文件名称111'
        }}
        visible={visible1}
        onCancel={() => setVisible1(false)}
      />
      <FileViewer
        file="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        visible={visible2}
        onCancel={() => setVisible2(false)}
      />
    </div>
  );
}

export default Demo;
