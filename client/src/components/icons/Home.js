import React from 'react';

const Home = ({ width, height, fill, strokeWidth, strokeColor, ...rest }) => {
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
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22L9 12 15 12 15 22" />
    </svg>
  );
};

Home.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};
export default Home;
