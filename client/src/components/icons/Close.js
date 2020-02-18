import React from 'react';

const Close = ({ width, height, fill, strokeWidth, strokeColor, ...rest }) => {
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
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  );
};

Close.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};

export default Close;
