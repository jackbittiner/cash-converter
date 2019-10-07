import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    convertedAmount(
      currencyFrom: String!
      currencyTo: String!
      amount: Float!
    ): Float!
  }
`;

export default typeDefs;
