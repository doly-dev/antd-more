import * as React from 'react';

interface MediaViewerProps {
  url: string;
  mediaType: 'audio' | 'video';
}

const MediaViewer: React.FunctionComponent<MediaViewerProps> = ({ url, mediaType }) => {
  const mediaRef = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    const target = mediaRef.current;
    return () => {
      if (target && target.played) {
        target.pause();
      }
    };
  }, []);

  return React.createElement(mediaType, {
    src: url,
    controls: true,
    style: { width: '100%' },
    ref: mediaRef
  });
};

export default MediaViewer;
