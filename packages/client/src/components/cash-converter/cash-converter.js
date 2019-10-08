import React, { useState } from "react";
import { currencyOptions } from "./currency-options";
import { Dropdown } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

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
      <Input placeholder="Output Value" />
      <button
        onClick={() =>
          getConversion({
            variables: {
              currencyFrom: "USD",
              currencyTo: "USDGBP",
              amount: 20.0
            }
          })
        }
      >
        PRESS ME
      </button>
      <p>convertedAmount: {convertedAmount}</p>
    </div>
  );
}

export default CashConverter;
