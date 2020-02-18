import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../theme/color';

import { SVG } from '../shared';

const ActiveSidebarLink = ({ children, href, passHref, ...rest }) => {
  const child = React.Children.only(children);

  return (
    <Link href={href} {...rest} passHref={passHref}>
      {React.cloneElement(child, { active: true })}
    </Link>
  );
};

const AppNavigation = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        scrollCallBack();
      });
    };
  }, []);

  return (
    <StyledNavigation id="header">
      <ActiveSidebarLink href="/app/invoice" passHref>
        <SidebarLink className="heading">
          <SVG name="users" width="18px" strokeWidth={2} />
          <span>Approvals</span>
        </SidebarLink>
      </ActiveSidebarLink>
      <ActiveSidebarLink href="/app/transactions" passHref>
        <SidebarLink className="heading">
          <SVG name="home" width="18px" strokeWidth={2} />
          <span>Statistics</span>
        </SidebarLink>
      </ActiveSidebarLink>
      <ActiveSidebarLink href="/app/payouts" passHref>
        <SidebarLink className="heading">
          <SVG name="card" width="18px" strokeWidth={2} />
          <span>Settings</span>
        </SidebarLink>
      </ActiveSidebarLink>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  width: 100%;
  z-index: 199999999;
  font-family: 'Cereal';
`;

const SidebarLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 25px;

  :hover {
    svg {
      color: ${colors.primaryColor};
    }
  }

  svg {
    opacity: ${({ active }) => (active ? 1 : 0.8)};
    color: ${({ active, theme }) =>
      active ? theme.colors.primaryColor : theme.colors.secondaryTextColor};
  }

  span {
    margin-left: 10px;
    font-size: 15px;
    font-weight: 500;
    opacity: ${({ active }) => (active ? 1 : 0.8)};
    color: ${({ theme, active }) =>
      active ? theme.colors.primaryTextColor : theme.colors.secondaryTextColor};
  }
`;

export default AppNavigation;
