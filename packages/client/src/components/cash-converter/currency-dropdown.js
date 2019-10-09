import React from "react";
import { Dropdown } from "semantic-ui-react";
import { currencyOptions } from "./currency-options";

const CurrencyDropdown = ({ setDropdownValue, value }) => {
  return (
    <Dropdown
      onChange={(e, selection) => {
        setDropdownValue(selection.value);
      }}
      placeholder="Select Currency"
      fluid
      selection
      options={currencyOptions}
      defaultValue={value}
    />
  );
};

export default CurrencyDropdown;
