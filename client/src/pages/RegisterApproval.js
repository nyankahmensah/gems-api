import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

// components
import { PageHeaderContainer } from '../components/shared';
import { TextInput, TextArea, CountrySelector, Button } from '../components/form_elements';
import MarketingLayout from '../components/hocs/MarketingLayout';

// css
import 'bootstrap/dist/css/bootstrap-grid.css';

// graphql mutation
import { requestApproval as requestApprovalMutation } from '../graphql/queries/approval';

const { PageHeader, PageHeaderText } = PageHeaderContainer;

function RegisterApproval() {
  const [approvalForm, setApprovalForm] = React.useState({
    country: '',
    organization: '',
    phoneNumber: '',
    emailAddress: '',
    requestReason: '',
  });
  const [redirect, setRedirect] = React.useState(false);
  const [requestApproval, { loading }] = useMutation(requestApprovalMutation, {
    variables: {
      ...approvalForm,
    },
    onError: error => {
      console.error(error.graphQLErrors[0]);
    },
    onCompleted: () => {
      setRedirect(true);
    },
  });

  if (redirect) {
    return <Redirect to="/app/register-approval/success" />;
  }

  return (
    <Container>
      <PageHeader>
        <PageHeaderText text="Register for GMES Mobile" />
      </PageHeader>

      <Row>
        <Col xs={12} md={4} sm={6} lg={4}>
          <CountrySelector
            placeholder="Country"
            style={{ width: '100%' }}
            onChange={country => setApprovalForm({ ...approvalForm, country: country.value })}
          />
        </Col>

        <Col xs={12} md={12} sm={12} lg={12}>
          <TextInput
            placeholder="Enter name of organisation"
            style={{ width: '100%' }}
            onChange={e => setApprovalForm({ ...approvalForm, organization: e.target.value })}
          />
        </Col>

        <Col xs={12} md={4} sm={6} lg={4}>
          <TextInput
            placeholder="Enter phone number"
            style={{ width: '100%' }}
            onChange={e => setApprovalForm({ ...approvalForm, phoneNumber: e.target.value })}
          />
        </Col>

        <Col xs={12} md={8} sm={6} lg={8}>
          <TextInput
            placeholder="Enter email address"
            style={{ width: '100%' }}
            onChange={e => setApprovalForm({ ...approvalForm, emailAddress: e.target.value })}
          />
        </Col>

        <Col xs={12} md={12} sm={12} lg={12}>
          <TextArea
            placeholder="Reason for request"
            style={{ width: '100%' }}
            onChange={e => setApprovalForm({ ...approvalForm, requestReason: e.target.value })}
          />
        </Col>
      </Row>

      <ActionBar>
        <Button onClick={requestApproval} loading={loading}>
          Register for approval
        </Button>
      </ActionBar>
    </Container>
  );
}

const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default MarketingLayout(RegisterApproval);
