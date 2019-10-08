import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    convertedCurrency(
      currencyFrom: String!
      currencyTo: String!
      amount: Float!
    ): CurrencyConversion!
  }

  type CurrencyConversion {
    currencyFrom: String!
    currencyTo: String!
    inputAmount: Float!
    outputAmount: Float!
  }
`;

export default typeDefs;
