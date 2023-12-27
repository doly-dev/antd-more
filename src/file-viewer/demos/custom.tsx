import React from 'react';
import type { UploadFile } from 'antd';
import { Button } from 'antd';
import { FileViewer } from 'antd-more';
import TestOfd from './assets/test.ofd';
import OfdView from './OfdView';

const data = {
  ofd: {
    uid: '-1',
    url: TestOfd,
    name: 'test.ofd'
  }
};

function Demo() {
  const [open, setOpen] = React.useState(false);
  const [fileInfo, setFileInfo] = React.useState<UploadFile>();
  const preview = async (type: string) => {
    setFileInfo(data[type]);
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={() => preview('ofd')}>预览ofd</Button>
      <FileViewer
        file={fileInfo}
        open={open}
        onCancel={() => setOpen(false)}
        renderView={(dom, { file }) => {
          const name = typeof file === 'string' ? '' : file.name;
          const url = typeof file === 'string' ? file : file.url || file.preview;
          if (url && (name.slice(-4) === '.ofd' || url.slice(-4) === '.ofd')) {
            return <OfdView fileUrl={url} />;
          }
          return dom;
        }}
        modalProps={{
          width: 1200
        }}
      />
    </div>
  );
}

export default Demo;
