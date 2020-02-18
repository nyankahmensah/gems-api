import React from 'react';

const Users = ({ width, height, fill, strokeWidth, strokeColor, ...rest }) => {
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
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
};

Users.defaultProps = {
  fill: 'none',
  strokeColor: 'currentColor',
};

export default Users;
