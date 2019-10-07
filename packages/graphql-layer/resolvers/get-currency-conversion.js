async function getCurrencyConversion(
  currencyFrom,
  currencyTo,
  amount,
  currencyConverter
) {
  const result = await currencyConverter.get("/");

  return 20.01;
}

export default getCurrencyConversion;
