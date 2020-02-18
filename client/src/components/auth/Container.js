import React from 'react';
import styled from 'styled-components';

const Container = ({ title, description, children }) => {
  return (
    <>
      <StyledContainer className="container">
        <div className="container-content">
          <h1 className="heading">{title}</h1>
          <p>{description}</p>
          <div className="form">{children}</div>
        </div>
      </StyledContainer>
    </>
  );
};

export default Container;

Container.defaultProps = {
  title: '',
  description: '',
};

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 30%;

    .form {
      width: 100%;
    }
  }
  .wrapper {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .container-content,
  .form {
    margin: 50px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex: 1;
      margin: 0;
      margin-bottom: 20px;
    }
  }

  .container-content {
    text-align: center;
    h1 {
      font-size: 40px;
      font-weight: 800;
      line-height: 1.23;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 30px;
        text-align: center;
      }
    }

    p {
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      line-height: 1.64;
      font-size: 17px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        text-align: center;
        margin: 15px 0;
      }
    }
  }

  .forget-password {
    margin: 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      text-align: center;
    }
  }
`;
