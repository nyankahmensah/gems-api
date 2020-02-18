import React from 'react';
import styled from 'styled-components';

// lib
import { formatCurrency } from '../../lib/string';

const MetricCard = ({
  currency,
  subText,
  amount,
  subTextColor,
  subTextBackgroundColor,
  containerOverridingStyles,
  ...rest
}) => {
  return (
    <>
      <StyledMetricCard {...rest} style={{ ...containerOverridingStyles }}>
        <div className="upper-container">
          <sup>{currency}</sup>
          <p className="heading">{formatCurrency({ amount })}</p>
        </div>

        <div
          className="sub-text"
          style={{
            backgroundColor: subTextBackgroundColor,
            color: subTextColor,
            boxShadow: `0 -1px 0 0 ${subTextBackgroundColor}`,
          }}
        >
          {subText}
        </div>
      </StyledMetricCard>
    </>
  );
};

MetricCard.defaultProps = {
  currency: 'GHS',
  subText: 'Nothing made yet',
  amount: '8,650',
};

const StyledMetricCard = styled.div`
  background: white;
  border-radius: 4px;
  flex: 1;
  z-index: 1;
  /* border: 1px solid #e2e8f0; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);

  .upper-container {
    padding: 40px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    sup {
      font-size: 11px;
      font-weight: 600;
      margin-right: 8px;
      margin-top: -10px;
      line-height: 1;
      color: #2d3748;
    }

    p {
      font-size: 27px;
      line-height: 1;
      font-weight: 500;
    }
  }

  .sub-text {
    padding: 15px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    border-top: 1px solid #e2e8f0;
    background-image: linear-gradient(rgb(255, 255, 255), rgb(250, 251, 252));
  }
`;

export default MetricCard;
