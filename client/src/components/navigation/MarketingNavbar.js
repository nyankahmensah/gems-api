import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/GMES-logo.jpg';

// components
import { Button } from '../form_elements';

const ActiveLink = ({ children, href, ...rest }) => {
  const child = React.Children.only(children);
  return <Link href={href} {...rest}></Link>;
};

const AuthPageNavbar = ({ router }) => {
  return (
    <>
      <StyledAuthPageNavbar className="styled-nav">
        <div className="left">
          <Link href="/">
            <p className="company-name heading" style={{ color: 'white' }}>
              GMES &amp; Africa
            </p>
          </Link>
        </div>
      </StyledAuthPageNavbar>
    </>
  );
};

const HomePageNavbar = () => {
  return (
    <>
      <StyledHomePageNavbar className="styled-nav">
        <div className="left">
          <Link href="/">
            <img src={Logo} alt="Logo" width="250px"/>
          </Link>
        </div>
      </StyledHomePageNavbar>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <StyledNavbarContainer>
        <div className="wrapper">{<HomePageNavbar />}</div>
      </StyledNavbarContainer>
    </>
  );
};

export default Navbar;
const StyledNavbarContainer = styled.header`
  left: 0;
  width: 100%;
  height: 0px;
  position: sticky;
  top: 0px;
  z-index: 999;

  .wrapper {
    background: white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.5s ease, background 0.2s ease;
  }

  .styled-nav {
    width: 100%;
    left: 0;
    z-index: 999;
    background: white;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      margin-right: auto;

      .company-name {
        font-weight: 700;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primaryTextColor};
      }
    }

    .right {
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      margin-left: auto;

      p {
        font-size: 14px;
        margin-right: 30px;
      }
    }
  }
`;

const StyledAuthPageNavbar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 30px;
  max-width: calc(100% - 200px);
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

const StyledHomePageNavbar = styled.nav(
  ({ theme }) => `
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    max-width: calc(100% - 200px);
    text-align: center;

    .routes {
      display: flex;
      justify-content: space-between;
      flex: 0.5;

      a {
        color: ${theme.colors.primaryTextColor};
        font-weight: 500;
        transition: 0.2s ease-in-out;

        :hover {
          color: ${theme.colors.primaryColor};
        }
      }
    }
  `,
);

const NavLink = styled.a(
  ({ active, theme }) => `
    font-family:"Cereal";
    opacity:0.8;
    color: ${active && theme.colors.primaryColor} !important;
  `,
);
