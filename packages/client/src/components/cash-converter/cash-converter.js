import React, { useState } from "react";
import { currencyOptions } from "./currency-options";
import { Dropdown } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { formatVariables } from "./format-variables";

function CashConverter({ getConversion, convertedAmount }) {
  const [dropdownOneValue, setDropdownOneValue] = useState(null);
  const [dropdownTwoValue, setDropdownTwoValue] = useState(null);
  const [inputOneValue, setInputOneValue] = useState(null);
  const [inputTwoValue, setInputTwoValue] = useState(null);

  return (
    <div>
      <Dropdown
        onChange={(e, selection) => {
          setDropdownOneValue(selection.value);
        }}
        placeholder="Select Currency"
        fluid
        selection
        options={currencyOptions}
      />
      <Input
        onChange={e => setInputOneValue(e.target.value)}
        placeholder="Input Value"
      />
      <Dropdown
        onChange={(e, selection) => {
          setDropdownTwoValue(selection.value);
        }}
        placeholder="Select Currency"
        fluid
        selection
        options={currencyOptions}
      />
      <Input placeholder="Output Value" value={convertedAmount} />
      <button
        onClick={() =>
          getConversion(
            formatVariables(dropdownOneValue, dropdownTwoValue, inputOneValue)
          )
        }
      >
        PRESS ME
      </button>
    </div>
  );
}

export default CashConverter;
