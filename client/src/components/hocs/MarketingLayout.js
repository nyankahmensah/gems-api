import React from 'react';
import styled from 'styled-components';

import { MarketingNavbar } from '../navigation/index';

export default function MarketingLayout(Component) {
  const PageWithMarketingLayout = () => {
    return (
      <>
        <MarketingNavbar />
        <StyledLayout>
          <Component />
        </StyledLayout>
      </>
    );
  };

  return PageWithMarketingLayout;
}

const StyledLayout = styled.div`
  margin-top: 75px;
`;
