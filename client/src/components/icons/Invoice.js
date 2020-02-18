import React from 'react';

const Invoice = ({ width, fill, strokeWidth, strokeColor, ...rest }) => {
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
      <path d="M12 2L2 7 12 12 22 7 12 2z" />
      <path d="M2 17L12 22 22 17" />
      <path d="M2 12L12 17 22 12" />
    </svg>
  );
};

Invoice.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};
export default Invoice;
