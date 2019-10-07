import { ApolloServer } from "apollo-server";
import CurrencyConverterDataSource from "./datasources/currency-converter-datasource";
import typeDefs from "./schema";
import getCurrencyConversion from "./resolvers/get-currency-conversion";

const resolvers = {
  Query: {
    convertedAmount: (
      _root,
      { currencyFrom, currencyTo, amount },
      { dataSources: { currencyConverter } }
    ) =>
      getCurrencyConversion(currencyFrom, currencyTo, amount, currencyConverter)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    currencyConverter: new CurrencyConverterDataSource()
  })
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
