import getCurrencyConversion from "./get-currency-conversion";

describe("getCurrencyConversion", function() {
  const currencyConverterDatasource = {
    get: jest.fn(() => mockReturn)
  };
  it("convert USD into vietnamese Dong", function(done) {
    return getCurrencyConversion(
      "USD",
      "USDVND",
      20,
      currencyConverterDatasource
    ).then(result => {
      expect(result).toStrictEqual(20.01);
      done();
    });
  });
});

const mockReturn = {
  source: "USD",
  quotes: {
    USDAED: 1.0,
    USDAFN: 2.0,
    USDVND: 3.0
  }
};
