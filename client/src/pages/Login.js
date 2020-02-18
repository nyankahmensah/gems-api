import React from 'react';
import styled from 'styled-components';

// components
import { Container } from '../components/auth';
import { Button, TextInput } from '../components/form_elements';
import { MarketingLayout } from '../components/hocs';
import { Link, Redirect } from 'react-router-dom';

const SignInPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  function login() {
    setLoading(true);
    setTimeout(() => {
      setRedirect(true);
    }, 3000);
  }

  if (redirect) {
    return <Redirect to="/app/messages" />;
  }

  return (
    <>
      <div className="content">
        <Container
          title="USSD / SMS Dashboard"
          description="Manage ocean state information - Admin Sign In"
        >
          <StyledForm>
            <TextInput type="text" placeholder="Email Address" name="email" />
            <TextInput type="password" placeholder="Password" name="password" />
            <Button size="small" style={{ height: '45px' }} loading={loading} onClick={login}>
              <span style={{ fontWeight: 500 }}>Sign In</span>
            </Button>

            <p className="forget-password" style={{ fontSize: '15px' }}>
              <Link to="/overview">
                <a className="link">Engineered by Polymorph Labs Ghana Limited</a>
              </Link>
              <p style={{ fontSize: '15px' }}>
                Copyright {new Date().getFullYear()}. All Rights Reserved
              </p>
            </p>
          </StyledForm>
        </Container>
      </div>
    </>
  );
};

export default MarketingLayout(SignInPage);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
