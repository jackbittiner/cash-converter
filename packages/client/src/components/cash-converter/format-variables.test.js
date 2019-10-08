import { formatVariables } from "./format-variables";

describe("formatVariables", function() {
  it("should format US dollars correctly", () => {
    const result = formatVariables("USD", "USD", 10);
    expect(result.variables.currencyFrom).toBe("USD");
    expect(result.variables.currencyTo).toBe("USD");
  });
});
