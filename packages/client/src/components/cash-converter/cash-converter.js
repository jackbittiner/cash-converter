import React, { useState } from "react";
import CurrencyDropdown from "./currency-dropdown";
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
      <CurrencyDropdown
        setDropdownValue={setDropdownOneValue}
        value={currencyFrom}
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
      <CurrencyDropdown
        setDropdownValue={setDropdownTwoValue}
        value={currencyTo}
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
