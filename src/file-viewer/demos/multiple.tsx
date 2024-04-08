import * as React from 'react';
import type { UploadFile } from 'antd';
import { Button } from 'antd';
import { FileViewer } from 'antd-more';
import TestImage from './assets/test.jpg';
import TestAudio from './assets/test.mp3';
import TestVideo from './assets/test.mp4';
import TestPdf from './assets/test.pdf';
import TestWord from './assets/test.docx';
import TestExcel from './assets/test.xlsx';
import TestZip from './assets/test.zip';

const data = {
  image: {
    uid: '-1',
    url: TestImage,
    name: 'test.jpg'
  },
  audio: {
    uid: '-2',
    url: TestAudio,
    name: 'test.mp3'
  },
  video: {
    uid: '-3',
    url: TestVideo,
    name: 'test.mp4'
  },
  pdf: {
    uid: '-4',
    url: TestPdf,
    name: 'test.pdf'
  },
  word: {
    uid: '-5',
    url: TestWord,
    name: 'test.docx'
  },
  excel: {
    uid: '-6',
    url: TestExcel,
    name: 'test.xlsx'
  },
  zip: {
    uid: '-7',
    url: TestZip,
    name: 'test.zip'
  }
};

function Demo() {
  const [open, setOpen] = React.useState(false);
  const [fileInfo, setFileInfo] = React.useState<UploadFile>();
  const preview = (type) => {
    setFileInfo(data[type]);
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={() => preview('image')}>预览图片</Button>
      <Button onClick={() => preview('audio')}>预览音频</Button>
      <Button onClick={() => preview('video')}>预览视频</Button>
      <Button onClick={() => preview('pdf')}>预览pdf</Button>
      <Button onClick={() => preview('word')}>预览word</Button>
      <Button onClick={() => preview('excel')}>预览excel</Button>
      <Button onClick={() => preview('zip')}>预览zip</Button>
      <FileViewer file={fileInfo} open={open} onCancel={() => setOpen(false)} />
    </div>
  );
}

export default Demo;
