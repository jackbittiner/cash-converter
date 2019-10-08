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
    <CashConverter
      getConversion={getConversion}
      convertedAmount={convertedAmount}
    />
  );
}

export default CashConverterContainer;
