import * as React from 'react';
import AsyncImage from '../components/AsyncImage';

function Demo() {
  return (
    <AsyncImage
      fssid={[
        { fileId: '1', fileName: '1.png' },
        { fileId: '2', fileName: '2.png' }
      ]}
      enabledDownload
    />
  );
}

export default Demo;
