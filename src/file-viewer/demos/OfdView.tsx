import React, { useEffect } from 'react';
import { useRef } from 'react';
import { parseOfdDocument, renderOfd } from 'ofd-pageview';
import { useSafeState } from 'rc-hooks';
import { Spin } from 'antd';

interface OfdViewProps {
  fileUrl: string;
  fileName?: string;
  screenWidth?: number;
}

const OfdView: React.FC<OfdViewProps> = ({ fileUrl, fileName, screenWidth }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [processing, setProcessing] = useSafeState(false);

  useEffect(() => {
    if (contentRef.current) {
      setProcessing(true);
      contentRef.current.innerHTML = '';
      parseOfdDocument({
        ofd: fileUrl,
        success(res: any) {
          const ofdObj = res[0];
          const width = screenWidth || contentRef.current?.clientWidth || 800;
          const divs = renderOfd(width, ofdObj);
          for (const div of divs) {
            if (contentRef.current) {
              contentRef.current.appendChild(div);
            }
          }
          setProcessing(false);
        },
        error(err: any) {
          setProcessing(false);
          console.error(err);
          if (contentRef.current) {
            contentRef.current.innerHTML = `该文件不支持预览，你可尝试<a href=${fileUrl} download=${fileName}>点击下载</a>。`;
          }
        }
      });
    }
  }, [fileName, fileUrl, screenWidth, setProcessing]);

  return (
    <Spin spinning={processing}>
      <div ref={contentRef} />
    </Spin>
  );
};

export default OfdView;
