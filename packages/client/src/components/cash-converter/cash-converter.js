import React, { useState } from "react";
import { currencyOptions } from "./currency-options";
import { Dropdown } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { debounce } from "lodash";

function CashConverter({
  getConversion,
  data,
  updateInputOneOrTwo,
  setUpdateInputOneOrTwo
}) {
  const { currencyFrom, currencyTo, inputAmount, outputAmount } =
    (data && data.convertedCurrency) || "";

  const [dropdownOneValue, setDropdownOneValue] = useState(currencyFrom);
  const [dropdownTwoValue, setDropdownTwoValue] = useState(currencyTo);

  const readyToConvert = !!dropdownOneValue && !!dropdownTwoValue;

  const debouncedInputHandler = debounce(e => {
    getConversion({
      variables: {
        currencyFrom:
          updateInputOneOrTwo === 2 ? dropdownOneValue : dropdownTwoValue,
        currencyTo:
          updateInputOneOrTwo === 1 ? dropdownOneValue : dropdownTwoValue,
        amount: parseFloat(e.target.value)
      }
    });
  }, 1000);

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
        onClick={() => setUpdateInputOneOrTwo(2)}
        onChange={e => {
          if (readyToConvert) {
            e.persist();
            debouncedInputHandler(e);
          }
        }}
        placeholder="Input Value"
        defaultValue={updateInputOneOrTwo === 1 ? outputAmount : inputAmount}
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
      <Input
        onClick={() => setUpdateInputOneOrTwo(1)}
        onChange={e => {
          if (readyToConvert) {
            e.persist();
            debouncedInputHandler(e);
          }
        }}
        placeholder="Output Value"
        defaultValue={updateInputOneOrTwo === 2 ? outputAmount : inputAmount}
      />
    </div>
  );
}

export default CashConverter;
