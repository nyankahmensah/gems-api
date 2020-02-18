import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../theme/color';

import { SVG } from '../shared';

const ActiveSidebarLink = ({ children, href, passHref, ...rest }) => {
  const child = React.Children.only(children);

  return <Link href={href} {...rest} passHref={passHref}></Link>;
};

const AppSideBarNavigation = () => {
  return (
    <>
      <StyledNavigation>
        <ActiveSidebarLink href="/app/invoice" passHref>
          <SidebarLink>
            <SVG name="invoice" width="22px" height="22px" strokeWidth={2} />
            <a>Invoice</a>
          </SidebarLink>
        </ActiveSidebarLink>

        <ActiveSidebarLink href="/app/transactions" passHref>
          <SidebarLink>
            <SVG name="home" width="22px" height="22px" strokeWidth={2} />
            <a>Transactions</a>
          </SidebarLink>
        </ActiveSidebarLink>

        <ActiveSidebarLink href="/app/payouts" passHref>
          <SidebarLink>
            <SVG name="card" width="22px" height="22px" strokeWidth={2} />
            <a>Payouts</a>
          </SidebarLink>
        </ActiveSidebarLink>

        <ActiveSidebarLink href="/app/customers" passHref>
          <SidebarLink>
            <SVG name="users" width="22px" height="22px" strokeWidth={2} />
            <a>Customers</a>
          </SidebarLink>
        </ActiveSidebarLink>

        <ActiveSidebarLink href="/app/settings" passHref>
          <SidebarLink>
            <SVG name="settings" width="22px" height="22px" strokeWidth={2} />
            <a>Settings</a>
          </SidebarLink>
        </ActiveSidebarLink>

        <div className="user-profile">
          <div className="user-data">
            <p className="cereal">Desmond Agyei</p>
            <p className="cereal">casprine.001@gmail.com</p>
          </div>
        </div>
      </StyledNavigation>
    </>
  );
};

const StyledNavigation = styled.aside`
  flex: 0.2;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 7vh 30px 10vh 0px;
  height: 91.6vh;
  border: 1px solid #e2e8f0;
  background: white;

  .user-profile {
    margin-top: auto;
    display: flex;
    padding: 15px 20px;
    margin-left: 50px;
    align-items: center;
    margin-bottom: 14vh;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.1);
    border: 1px solid #e2e8f0;

    p {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.secondaryTextColor};

      :first-child {
        font-size: 15px;
        margin-bottom: 5px;
        font-weight: 500;
      }
    }
  }
`;

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 50px;
  cursor: pointer;

  :hover {
    svg {
      color: ${colors.primaryColor};
    }
  }

  svg {
    color: ${({ active, theme }) =>
      active ? theme.colors.primaryColor : theme.colors.secondaryTextColor};
  }

  a {
    margin-left: 15px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme, active }) =>
      active ? theme.colors.primaryTextColor : theme.colors.secondaryTextColor};
  }
`;

export default AppSideBarNavigation;
