import { formatVariables } from "./format-variables";

describe("formatVariables", function() {
  it("should format US dollars correctly", () => {
    const result = formatVariables("USD", "USD", 10);
    expect(result.variables.currencyFrom).toBe("USD");
    expect(result.variables.currencyTo).toBe("USD");
  });
  it("should format non US dollars correctly", () => {
    const result = formatVariables("ABC", "XYZ", 10);
    expect(result.variables.currencyFrom).toBe("USDABC");
    expect(result.variables.currencyTo).toBe("USDXYZ");
  });
  it("should format the amount correctly as a float", () => {
    const result = formatVariables("ABC", "XYZ", 10);
    expect(result.variables.amount).toBe(10.0);
  });
});
