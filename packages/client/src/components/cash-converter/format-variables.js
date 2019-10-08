export function formatVariables(currencyFrom, currencyTo, amount) {
  const result = {
    variables: {
      currencyFrom: currencyFrom,
      currencyTo: currencyTo,
      amount: amount
    }
  };

  return result;
}
