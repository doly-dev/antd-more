import React, { useState } from 'react';
import {
  ColorBlockPicker,
  ColorChromePicker,
  ColorCompactPicker,
  ColorPhotoshopPicker,
  ColorSketchPicker
} from 'antd-more';

export default () => {
  const [color1, setColor1] = useState('#e60000');
  const [color2, setColor2] = useState('rgba(255,127,0,1)');
  const [color3, setColor3] = useState('#fcdc00');
  const [color4, setColor4] = useState('#a4dd00');
  const [color5, setColor5] = useState('rgba(104,204,202,1)');

  return (
    <>
      <h3>ColorBlockPicker</h3>
      <ColorBlockPicker value={color1} onChange={setColor1} showText />
      <br />
      <br />
      <h3>ColorChromePicker</h3>
      <ColorChromePicker
        value={color2}
        onChange={setColor2}
        showText
        colorMode="rgb"
        placement="topLeft"
      />
      <p style={{ fontSize: 13, color: 'gray' }}>禁止选择：</p>
      <ColorChromePicker
        value={color2}
        onChange={setColor2}
        showText
        colorMode="rgb"
        placement="topLeft"
        disabled
      />
      <br />
      <br />
      <h3>ColorCompactPicker</h3>
      <ColorCompactPicker value={color3} onChange={setColor3} showText />
      <br />
      <br />
      <h3>ColorPhotoshopPicker</h3>
      <ColorPhotoshopPicker value={color4} onChange={setColor4} showText placement="topLeft" />
      <br />
      <br />
      <h3>ColorSketchPicker</h3>
      <ColorSketchPicker
        value={color5}
        onChange={setColor5}
        showText
        colorMode="rgb"
        placement="topLeft"
      />
    </>
  );
};
