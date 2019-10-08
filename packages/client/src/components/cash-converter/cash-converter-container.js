import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CashConverter from "./cash-converter";

const GET_CONVERSION = gql`
  query getConversion(
    $currencyFrom: String!
    $currencyTo: String!
    $amount: Float!
  ) {
    convertedCurrency(
      currencyFrom: $currencyFrom
      currencyTo: $currencyTo
      amount: $amount
    ) {
      currencyFrom
      currencyTo
      inputAmount
      outputAmount
    }
  }
`;

function CashConverterContainer() {
  const [getConversion, { error, loading, data }] = useLazyQuery(
    GET_CONVERSION
  );

  console.log(data);

  if (error) return <p>Error...</p>;
  if (loading) return <p>Loading...</p>;

  return <CashConverter getConversion={getConversion} data={data} />;
}

export default CashConverterContainer;
