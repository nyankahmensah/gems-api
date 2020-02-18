import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = ({
  type,
  name,
  onChange,
  onKeyPress,
  onKeyUp,
  onKeyDown,
  placeholder,
  value,
  disabled,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  return (
    <>
      <StyledTextArea
        {...rest}
        disabled={disabled}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        name={name}
        value={value}
        onChange={(e: Event) => {
          onChange(e, name);
        }}
        onBlur={(e: any) => {
          setFocus(false);
          e.currentTarget.value.length !== 0 ? setHasContent(true) : setHasContent(false);
        }}
        onFocus={() => setFocus(true)}
        hasFocus={focus}
        hasContent={hasContent}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

export default TextArea;

TextArea.defaultProps = {
  type: 'text',
  name: 'text-input',
  placeholder: '',
  onChange: (e: Event) => {},
  onKeyPress: (e: Event) => {},
  onKeyUp: (e: Event) => {},
  onKeyDown: (e: Event) => {},
};

const StyledTextArea = styled.textarea`
  padding: 13px 15px;
  background: white;
  border-radius: 4px;
  margin-bottom: 15px;
  height: 100px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-weight: 400;
  outline: 0;
  border: 1px solid
    ${({ theme, hasFocus, hasContent }) =>
      hasFocus
        ? theme.colors.primaryColor
        : hasContent
        ? theme.colors.secondaryTextColor
        : theme.colors.inactiveBorderColor};

  ::placeholder {
    color: ${({ theme }) => theme.colors.inactiveTextColor};
  }
`;
