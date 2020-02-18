import React from 'react';

const Card = ({ width, height, fill, strokeWidth, strokeColor, ...rest }) => {
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
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <path d="M1 10L23 10" />
    </svg>
  );
};

Card.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};

export default Card;
