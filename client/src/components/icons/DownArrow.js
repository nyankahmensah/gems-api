import React from 'react';

const DownArrow = ({ width, height, fill, strokeWidth, strokeColor, ...rest }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fether feather-home"
      {...rest}
    >
      <path d="M6 9L12 15 18 9" />
    </svg>
  );
};

DownArrow.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};

export default DownArrow;
