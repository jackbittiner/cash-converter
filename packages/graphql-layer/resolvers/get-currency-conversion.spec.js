import getCurrencyConversion from "./get-currency-conversion";

describe("getCurrencyConversion", function() {
  const currencyConverterDatasource = {
    get: jest.fn(() => mockReturn)
  };
  it("converts USD into vietnamese Dong", function(done) {
    return getCurrencyConversion(
      "USD",
      "USDVND",
      20.0,
      currencyConverterDatasource
    ).then(result => {
      expect(result).toStrictEqual(60.0);
      done();
    });
  });

  it("converts vietnamese Dong into USD", function(done) {
    return getCurrencyConversion(
      "USDVND",
      "USD",
      60.0,
      currencyConverterDatasource
    ).then(result => {
      expect(result).toStrictEqual(20.0);
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
