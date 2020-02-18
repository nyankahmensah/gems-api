import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <StyledFooter className="container">
        <div className="copyright">Copyright © 2019</div>
      </StyledFooter>
    </>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  height: 60px;
  display: flex;
  align-items: center;
  background: rgba(23, 42, 59, 0.9);
  color: rgba(255, 255, 255, 0.4);
`;
