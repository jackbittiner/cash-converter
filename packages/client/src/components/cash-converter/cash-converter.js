import React, { useState } from "react";
import { currencyOptions } from "./currency-options";
import { Dropdown } from "semantic-ui-react";

function CashConverter({ getConversion, convertedAmount }) {
  const [dropdownOneValue, setDropdownOneValue] = useState(null);

  console.log(dropdownOneValue);

  return (
    <div>
      <Dropdown
        onChange={(e, value) => {
          setDropdownOneValue(value.value);
        }}
        placeholder="Select Currency"
        fluid
        selection
        options={currencyOptions}
      />
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
