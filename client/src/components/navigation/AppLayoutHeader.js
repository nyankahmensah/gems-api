import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppLayoutHeader = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <div className="logo">
          <Link href="/overview">
            <p>Global Monitoring for Environment and Security</p>
          </Link>
        </div>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

export default AppLayoutHeader;

const StyledNavbar = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  margin: 0 auto;
  max-width: 1024px;
  flex: 1;
  

  .logo {
    p {
      font-weight: 700;
      cursor: pointer;
      font-size: 18px;
      color: white;
    }
  }
  .right-side {
    flex: 1;
  }
`;

const StyledNavbarContainer = styled.div`
  background: #173f5f;
  height: 70px;
  width: 100%;
  padding: 0 10px;
`;
