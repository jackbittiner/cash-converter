import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CONVERSION = gql`
  query getConversion(
    $currencyFrom: String!
    $currencyTo: String!
    $amount: Float!
  ) {
    convertedAmount(
      currencyFrom: $currencyFrom
      currencyTo: $currencyTo
      amount: $amount
    )
  }
`;

function CashConverterContainer() {
  const [getConversion, { error, loading, data }] = useLazyQuery(
    GET_CONVERSION
  );

  if (error) return <p>Error...</p>;
  if (loading) return <p>Loading...</p>;

  const convertedAmount = data && data.convertedAmount;

  return (
    <div>
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

export default CashConverterContainer;
