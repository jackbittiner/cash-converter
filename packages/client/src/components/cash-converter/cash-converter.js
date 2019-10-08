import React, { useState } from "react";
import { currencyOptions } from "./currency-options";
import { Dropdown } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

function CashConverter({ getConversion, data }) {
  const { currencyFrom, currencyTo, inputAmount, outputAmount } =
    (data && data.convertedCurrency) || "";

  const [dropdownOneValue, setDropdownOneValue] = useState(currencyFrom);
  const [dropdownTwoValue, setDropdownTwoValue] = useState(currencyTo);
  const [inputOneValue, setInputOneValue] = useState(inputAmount);
  const [inputTwoValue, setInputTwoValue] = useState(outputAmount);

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
        defaultValue={currencyFrom}
      />
      <Input
        onChange={e => {
          getConversion({
            variables: {
              currencyFrom: dropdownOneValue,
              currencyTo: dropdownTwoValue,
              amount: parseFloat(e.target.value)
            }
          });
        }}
        placeholder="Input Value"
        defaultValue={inputAmount}
      />
      <Dropdown
        onChange={(e, selection) => {
          setDropdownTwoValue(selection.value);
        }}
        placeholder="Select Currency"
        fluid
        selection
        options={currencyOptions}
        defaultValue={currencyTo}
      />
      <Input placeholder="Output Value" defaultValue={outputAmount} />
      <button
        onClick={() =>
          getConversion({
            variables: {
              currencyFrom: dropdownOneValue,
              currencyTo: dropdownTwoValue,
              amount: parseFloat(inputOneValue)
            }
          })
        }
      >
        PRESS ME
      </button>
    </div>
  );
}

export default CashConverter;
