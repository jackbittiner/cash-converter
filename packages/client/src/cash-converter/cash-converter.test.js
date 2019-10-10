import React from "react";
import { mount } from "enzyme";
import { Input } from "semantic-ui-react";
import CashConverter from "./cash-converter";

test("the currency amounts populate the current input fields", () => {
  const getConversionMock = jest.fn();

  const setUpdateInputOneOrTwoMock = jest.fn();

  const wrapper = mount(
    <CashConverter
      getConversion={getConversionMock}
      data={{
        convertedCurrency: {
          currencyFrom: "USD",
          currencyTo: "USDGBP",
          inputAmount: 10,
          outputAmount: 20
        }
      }}
      updateInputOneOrTwo={1}
      setUpdateInputOneOrTwo={setUpdateInputOneOrTwoMock}
    />
  );

  const inputs = wrapper.find(Input);

  const inputOneDefaultValue = inputs.first().props().defaultValue;
  const inputTwoDefaultValue = inputs.at(1).props().defaultValue;

  expect(inputOneDefaultValue).toEqual(20);
  expect(inputTwoDefaultValue).toEqual(10);
});
