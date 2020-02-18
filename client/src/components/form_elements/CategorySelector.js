import React from 'react';
import Select from 'react-select';

// countries
import countries from '../../theme/countries';
import Colors from '../../theme/color';

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    height: '45px',
    fontSize: '16px',
    color: Colors.primaryTextColor,
    marginBottom: '15px',
    borderColor: isFocused ? Colors.primaryColor : Colors.inactiveBorderColor,
    boxShadow: isFocused ? `0 0 1px ${Colors.primaryColor}` : `none`,

    ':hover': {
      borderColor: Colors.inactiveBorderColor,
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: Colors.inactiveTextColor,
  }),
  container: styles => ({
    ...styles,
    borderColor: Colors.primaryColor,
  }),
  input: styles => ({
    ...styles,
    color: Colors.secondaryTextColor,
    fontFamily: 'Inter',
  }),
  singleValue: styles => ({
    ...styles,
    color: Colors.secondaryTextColor,
  }),

  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
  menu: styles => ({
    ...styles,
    maxHeight: '200px',
    overflow: 'hidden',
  }),
};

const CategorySelector = ({ ...rest }) => {
  return (
    <>
      <Select
        {...rest}
        styles={customStyles}
        options={[
          { label: 'Farming', value: 'farming' },
          { label: 'Fishing', value: 'fishing' },
        ]}
      />
    </>
  );
};

export default CategorySelector;

CategorySelector.defaultProps = {
  onChange: e => {},
  name: 'country-selector',
};
