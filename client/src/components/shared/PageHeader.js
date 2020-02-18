import React from 'react';
import styled from 'styled-components';

// components
import { Button } from '../form_elements';
// import SVG from './SVG';

const PageHeader = ({ children, ...rest }: { children: any }) => {
  return (
    <>
      <StyledPageHeader {...rest}>{children}</StyledPageHeader>
    </>
  );
};

const PageHeaderText = ({ text = 'Overview' }: { text?: string }) => (
  <div className="leftComponent">
    <p className="heading">{text}</p>
  </div>
);

const PageHeaderAction = ({
  onClick,
  buttonText,
}: {
  onClick?: (e: React.MouseEvent) => void,
  buttonText: string,
}) => {
  return (
    <div className="rightComponent">
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .leftComponent {
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: baseline;
    cursor: pointer;

    p {
      font-size: 22px;
      font-weight: 500;
    }
  }

  .rightComponent {
    margin-left: auto;
  }
`;

export default { PageHeader, PageHeaderText, PageHeaderAction };
