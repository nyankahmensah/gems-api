import React from 'react';
import { iconList } from '../icons/icons';

const SVG = ({ name, width, height, style, fill, strokeWidth, ...rest }) => {
  return (
    <>
      {React.cloneElement(iconList[name], {
        name,
        width,
        height,
        style,
        fill,
        strokeWidth,
        ...rest,
      })}
    </>
  );
};

export default SVG;
