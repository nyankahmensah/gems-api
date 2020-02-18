import React, { Fragment } from 'react';
import styled from 'styled-components';

const LoadingIndicator = () => (
  <Fragment>
    <div className="sk-fading-circle">
      <div className="sk-circle1 sk-circle" />
      <div className="sk-circle2 sk-circle" />
      <div className="sk-circle3 sk-circle" />
      <div className="sk-circle4 sk-circle" />
      <div className="sk-circle5 sk-circle" />
      <div className="sk-circle6 sk-circle" />
      <div className="sk-circle7 sk-circle" />
      <div className="sk-circle8 sk-circle" />
      <div className="sk-circle9 sk-circle" />
      <div className="sk-circle10 sk-circle" />
      <div className="sk-circle11 sk-circle" />
      <div className="sk-circle12 sk-circle" />
    </div>
  </Fragment>
);

function buttonSizeStyles(size) {
  const buttonSizes = {
    large: {
      height: '70px',
      fontSize: '19px',
      lineHeight: '70px',
    },
    regular: {
      height: '60px',
      fontSize: '18px',
      lineHeight: '60px',
    },
    medium: {
      height: '50px',
      fontSize: '17px',
      lineHeight: '50px',
    },
    small: {
      height: '40px',
      fontSize: '16px',
      lineHeight: '40px',
    },
    extraSmall: {
      height: '35px',
      fontSize: '15px',
      padding: '0 20px',
      lineHeight: '35px',
    },
  };
  return buttonSizes[size];
}

const Button = ({ disabled, type, size, variant, style, onClick, children, loading, ...rest }) => {
  const outline = variant === 'outline';
  const buttonSize = buttonSizeStyles(size);

  return (
    <>
      <StyledButton
        disabled={disabled}
        type={type}
        onClick={onClick}
        {...rest}
        style={{
          ...buttonSize,
          ...style,
        }}
        outline={outline}
      >
        {!loading && children}
        {loading && <LoadingIndicator />}
      </StyledButton>
    </>
  );
};
export default Button;

Button.defaultProps = {
  size: 'extraSmall',
  type: 'button',
};

const StyledButton = styled.button`
  background: ${({ outline, theme }) => (outline ? 'transparent' : theme.colors.primaryColor)};
  color: ${({ outline, theme }) => (outline ? theme.colors.primaryTextColor : 'white')};
  border: ${({ outline, theme }) =>
    outline ? `1px solid red ${theme.colors.inactiveTextColor}` : 'none'};
  border-radius: 4px;
  align-items: center;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.25s ease, -webkit-transform 0.25s ease;
  outline: none;
  display: flex;
  justify-content: center;

  :hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    transform: translate3d(0, -3px, 0);
  }
`;
