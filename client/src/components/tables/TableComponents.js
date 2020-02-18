import React from 'react';
import styled from 'styled-components';
import { generateDate } from '../../lib/date';
import { formatCurrency } from '../../lib/string';
import { SVG } from '../shared';

const CompanyProfile = ({ organization }) => (
  <StyledUserProfile>{organization.charAt(0)}</StyledUserProfile>
);

const ContentFormatter = ({ organization }) => (
  <p style={{ color: '#2D3748', fontFamily: 'Cereal' }}>{organization}</p>
);

const OrganizationFormatter = ({ organization, country }) => (
  <div>
    <p style={{ color: '#2D3748', fontFamily: 'Cereal' }}>{organization}</p>
    <p style={{ color: '#2D3748' }}>{country}</p>
  </div>
);

const ReasonForRequestFormatter = ({ requestReason }) => (
  <p style={{ color: '#2D3748', fontFamily: 'Cereal' }}>{requestReason}</p>
);

const EmailFormatter = ({ emailAddress }) => <p style={{ color: '#2D3748' }}>{emailAddress}</p>;

const DateFormatter = ({ createdAt }) => <div>{generateDate({ dateString: createdAt })}</div>;

const ActionsFormatter = () => (
  <ActionsBar>
    <SVG name="users" width="18px" strokeWidth={2} color={'green'}/>
    <SVG name="users" width="18px" strokeWidth={2} color={'red'}/>
  </ActionsBar>
);

const CurrencyFomartter = ({ amount }) => (
  <>
    {formatCurrency({
      amount: amount,
      showCurrency: true,
    })}
  </>
);

const InvoiceName = ({ name }) => (
  <>
    <p style={{ color: '#2D3748', fontFamily: 'Cereal' }}>{name}</p>
    <p>Joseph Mantey</p>
  </>
);

const CategoryFormatter = ({ category }) => {
  let statusView;

  switch (category) {
    case 'farming':
      statusView = {
        text: 'Farming',
        color: '#4A5568',
      };
      break;

    case 'fishing':
      statusView = {
        text: 'Fishing',
        color: '#06b97c',
      };
      break;

    default:
      statusView = {
        text: 'N / A',
        color: '#DC143C',
      };
  }

  return (
    <StyledStatusFormatter color={statusView.color}>
      {statusView && statusView.text}
    </StyledStatusFormatter>
  );
};

const StyledStatusFormatter = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #4a5568 !important;
  font-weight: 400 !important;

  ::before {
    content: '';
    width: 8px;
    height: 8px;
    display: block;
    background: ${({ color }) => color};
    border-radius: 5px;
    margin-right: 8px;
  }
`;

const StyledUserProfile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-180deg, #edf2f7 0%, #e2e8f0 100%) #a0aec0;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 18px;
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default {
  CompanyProfile,
  EmailFormatter,
  DateFormatter,
  CurrencyFomartter,
  ActionsFormatter,
  InvoiceName,
  CategoryFormatter,
  ContentFormatter,
  ReasonForRequestFormatter,
  OrganizationFormatter,
};
