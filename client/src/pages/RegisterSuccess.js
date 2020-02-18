import React from 'react';

// components
import { Container } from '../components/auth';
import { MarketingLayout } from '../components/hocs';

// Image
import messageSentImage from '../assets/images/message-sent.svg';

const RegisterSuccess = () => {
  return (
    <>
      <div className="content">
        <Container
          title="Registration is pending approval"
          description="Your application has been logged successfully. We will review and revert as soon as possible"
        >
          <img src={messageSentImage} width="300px" alt="Registration is successful" />
        </Container>
      </div>
    </>
  );
};

export default MarketingLayout(RegisterSuccess);
