async function getCurrencyConversion(
  currencyFrom,
  currencyTo,
  amount,
  currencyConverter
) {
  const result = await currencyConverter.get("/");

  let outputAmount;

  if (currencyFrom === "USD") {
    outputAmount = outputAmount = amount * result.quotes[currencyTo];
  } else if (currencyTo === "USD") {
    outputAmount = outputAmount = amount / result.quotes[currencyFrom];
  } else {
    outputAmount =
      (amount / result.quotes[currencyFrom]) * result.quotes[currencyTo];
  }

  return {
    currencyFrom,
    currencyTo,
    inputAmount: amount,
    outputAmount
  };
}

export default getCurrencyConversion;
