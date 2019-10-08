export function formatVariables(currencyFrom, currencyTo, amount) {
  const currencyFromVariable =
    currencyFrom === "USD" ? currencyFrom : `USD${currencyFrom}`;
  const currencyToVariable =
    currencyTo === "USD" ? currencyTo : `USD${currencyTo}`;

  const result = {
    variables: {
      currencyFrom: currencyFromVariable,
      currencyTo: currencyToVariable,
      amount: parseFloat(amount)
    }
  };

  return result;
}
