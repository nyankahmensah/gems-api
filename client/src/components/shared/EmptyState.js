import React from 'react';
import styled from 'styled-components';
import Button from '../form_elements/Button';

const EmptyState = ({ title, description, buttonText, buttonOnClick, contianerOverideStyles }) => {
  return (
    <>
      <StyledEmptyState style={{ ...contianerOverideStyles }}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button onClick={buttonOnClick}>{buttonText}</Button>
      </StyledEmptyState>
    </>
  );
};

EmptyState.defaultProps = {
  title: 'No Sent Invoices',
  description: 'Use this feature to bill your customers easily or send professional invoices',
  buttonText: 'Request Payment',
};

export default EmptyState;

const StyledEmptyState = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  /* background: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05); */

  h4 {
    font-size: 20px;
    font-weight: 500;
    color: #172a3b;
  }

  p {
    width: 336px;
    font-size: 16px;
    line-height: 1.5;
    color:${theme.colors.secondaryTextColor} ;
    text-align: center;
    margin: 20px 0;
  }`,
);
