import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getCurrencyConversion(
      currencyFrom: String!
      currencyTo: String!
      amount: Float!
    ): Float!
  }
`;

export default typeDefs;
