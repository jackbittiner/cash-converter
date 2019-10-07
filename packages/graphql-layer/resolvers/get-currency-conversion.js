async function getCurrencyConversion(
  currencyFrom,
  currencyTo,
  amount,
  currencyConverter
) {
  const result = await currencyConverter.get("/");

  if (currencyFrom === "USD") {
    return amount * result.quotes[currencyTo];
  }

  if (currencyTo === "USD") {
    return amount / result.quotes[currencyFrom];
  }
}

export default getCurrencyConversion;
