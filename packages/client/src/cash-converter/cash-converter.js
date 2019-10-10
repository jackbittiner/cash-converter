import React, { useState } from "react";
import CurrencyDropdown from "./currency-dropdown";
import { Input } from "semantic-ui-react";
import { debounce } from "lodash";
import styled from "styled-components";
import Header from "./header";

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

  const handleOnChange = e => {
    if (readyToConvert) {
      e.persist();
      debouncedInputHandler(e);
    }
  };

  return (
    <>
      <Header />
      <Grid>
        <SectionOne className="section-1">
          <CurrencyDropdown
            setDropdownValue={setDropdownOneValue}
            value={currencyFrom}
          />
          <Input
            onClick={() => setUpdateInputOneOrTwo(2)}
            onChange={e => handleOnChange(e)}
            placeholder="Input Value"
            defaultValue={
              updateInputOneOrTwo === 1 ? outputAmount : inputAmount
            }
          />
        </SectionOne>
        <SectionTwo className="section-2">
          <CurrencyDropdown
            setDropdownValue={setDropdownTwoValue}
            value={currencyTo}
          />
          <Input
            onClick={() => setUpdateInputOneOrTwo(1)}
            onChange={e => handleOnChange(e)}
            placeholder="Output Value"
            defaultValue={
              updateInputOneOrTwo === 2 ? outputAmount : inputAmount
            }
          />
        </SectionTwo>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  max-width: 500px;
  margin: 2em auto;
`;

const SectionOne = styled.div`
  display: flex;
`;

const SectionTwo = styled.div`
  display: flex;
`;

export default CashConverter;
