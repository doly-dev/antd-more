import * as React from 'react';
import { Button } from 'antd';
import { FileViewer } from 'antd-more';

function Demo() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen1(true)}>预览图片-UploadFile</Button>
      <Button onClick={() => setOpen2(true)}>预览图片-url</Button>
      <FileViewer
        file={{
          uid: '-1',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          name: '图片文件名称111'
        }}
        open={open1}
        onCancel={() => setOpen1(false)}
      />
      <FileViewer
        file="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        open={open2}
        onCancel={() => setOpen2(false)}
      />
    </div>
  );
}

export default Demo;
