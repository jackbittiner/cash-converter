async function getCurrencyConversion(
  currencyFrom,
  currencyTo,
  amount,
  currencyConverter
) {
  const result = await currencyConverter.get("/");

  return amount * result.quotes[currencyTo];
}

export default getCurrencyConversion;
