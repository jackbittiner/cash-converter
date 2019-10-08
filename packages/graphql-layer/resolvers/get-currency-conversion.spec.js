import getCurrencyConversion from "./get-currency-conversion";

describe("getCurrencyConversion", function() {
  const currencyConverterDatasource = {
    get: jest.fn(() => mockReturn)
  };

  it.each`
    currencyFrom | currencyTo  | inputAmount | outputAmount
    ${"USD"}     | ${"USDVND"} | ${20.0}     | ${60.0}
    ${"USDVND"}  | ${"USD"}    | ${60.0}     | ${20.0}
    ${"USDAFN"}  | ${"USDVND"} | ${40.0}     | ${60.0}
  `(
    "should return $outputAmount $currencyTo when given $inputAmount $currencyFrom",
    ({ currencyFrom, currencyTo, inputAmount, outputAmount }, done) => {
      return getCurrencyConversion(
        currencyFrom,
        currencyTo,
        inputAmount,
        currencyConverterDatasource
      ).then(result => {
        expect(result).toStrictEqual({
          currencyFrom,
          currencyTo,
          inputAmount,
          outputAmount
        });
        done();
      });
    }
  );
});

const mockReturn = {
  source: "USD",
  quotes: {
    USDAED: 1.0,
    USDAFN: 2.0,
    USDVND: 3.0
  }
};
