import * as React from 'react';
import { FileViewer } from 'antd-more';
import TestImage from './assets/test.jpg';
import TestAudio from './assets/test.mp3';
import TestVideo from './assets/test.mp4';
import TestPdf from './assets/test.pdf';
import TestWord from './assets/test.docx';
import TestExcel from './assets/test.xlsx';
import TestZip from './assets/test.zip';
import TestOfd from './assets/test.ofd';
import OfdView from './OfdView';

const fileList = [
  {
    uid: '-1',
    url: TestImage,
    name: 'test.jpg'
  },
  {
    uid: '-2',
    url: TestAudio,
    name: 'test.mp3'
  },
  {
    uid: '-3',
    url: TestVideo,
    name: 'test.mp4'
  },
  {
    uid: '-4',
    url: TestPdf,
    name: 'test.pdf'
  },
  {
    uid: '-5',
    url: TestWord,
    name: 'test.docx'
  },
  {
    uid: '-6',
    url: TestExcel,
    name: 'test.xlsx'
  },
  {
    uid: '-7',
    url: TestZip,
    name: 'test.zip'
  },
  {
    uid: '-8',
    url: TestOfd,
    name: 'test.ofd'
  }
].map((item) => ({
  ...item,
  thumbUrl: FileViewer.getFileThumbUrl(item)
}));

function Demo() {
  return (
    <FileViewer.PictureCard
      fileList={fileList}
      renderView={(dom, { file }) => {
        const url = typeof file === 'string' ? file : file.url!;
        if (url.indexOf('.ofd') !== -1) {
          return <OfdView fileUrl={url} />;
        }
        return dom;
      }}
    />
  );
}

export default Demo;
