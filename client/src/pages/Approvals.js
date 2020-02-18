import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { approvals as approvalsQuery } from '../graphql/queries/approval';

// components
import { AppLayout } from '../components/hocs';
import { PageHeaderContainer, MetricCard, EmptyState } from '../components/shared';
import { InvoiceSelectionTypeModal } from '../components/modals';
import { ApprovalTable } from '../components/tables';

// Loader
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import color from '../theme/color';

const { PageHeader, PageHeaderText } = PageHeaderContainer;

const Approvals = () => {
  const [showModal, setModalState] = useState(false);
  const [invoiceType, setInvoiceType] = useState('');

  const { loading, data, error } = useQuery(approvalsQuery);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Loader type="Oval" color={color.primaryColor} height={100} width={100} />
      </div>
    );
  }

  if (data) {
    console.log('This is my data', data);
  }

  if (error) {
    console.error(error);
    return <EmptyState />;
  }

  return (
    <>
      <PageHeader>
        <PageHeaderText text="Approvals" />
      </PageHeader>

      <StyledMetricContainer>
        <MetricCard amount="0" />
        <MetricCard subText="No overdues" containerOverridingStyles={{ margin: '10px 15px' }} />
        <MetricCard subText="No pending invoices" amount="0" />
      </StyledMetricContainer>

      <ApprovalTable rowsFromDataSource={data.approvals} />

      <InvoiceSelectionTypeModal
        title="Create Message"
        show={showModal}
        selectedInvoice={invoiceType}
        handleInvoiceTypeSelection={invoiceType => setInvoiceType(invoiceType)}
        closeModal={() => setModalState(false)}
      />
    </>
  );
};

const ApprovalsWithAppLayout = AppLayout(Approvals);

export default ApprovalsWithAppLayout;

const StyledMetricContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
