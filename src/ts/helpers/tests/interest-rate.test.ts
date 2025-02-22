import getMonthlyInterestRate from "../calculate-interest-rate";

test("Test for 5.25% interest rate", () => {
  expect(getMonthlyInterestRate(5.25)).toBeCloseTo(0.004375, 7);
});

test("Test for 4% interest rate", () => {
  expect(getMonthlyInterestRate(4)).toBeCloseTo(0.0033333, 7);
});

test("Test for 0.5% interest rate", () => {
  expect(getMonthlyInterestRate(0.5)).toBeCloseTo(0.000417, 6);
});

test("Test for 0.75% interest rate", () => {
  expect(getMonthlyInterestRate(0.75)).toBeCloseTo(0.000625, 6);
});

test("Test for 7% interest rate", () => {
  expect(getMonthlyInterestRate(7)).toBeCloseTo(0.00583, 5);
});
