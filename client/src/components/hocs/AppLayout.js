import React from 'react';
import styled from 'styled-components';

// components
import { AppLayoutHeader, AppNavigation } from '../navigation';

export default function AppLayout(Component) {
  const PageWithAppLayout = () => {
    return (
      <StyledAppLayout>
        <AppLayoutHeader />
        <AppNavigation />
        <div className="content">
          <Component />
        </div>
      </StyledAppLayout>
    );
  };
  return PageWithAppLayout;
}

const StyledAppLayout = styled.main`
  position: relative;

  .content {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    padding: 7.8vh 10px;
    position: relative;
    box-sizing: border-box;
  }
`;
