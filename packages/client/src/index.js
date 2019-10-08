import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false
  })
});

const ApolloApp = AppComponent => {
  return (
    <ApolloProvider client={client}>
      <AppComponent />
    </ApolloProvider>
  );
};

ReactDOM.render(ApolloApp(App), document.getElementById("root"));
