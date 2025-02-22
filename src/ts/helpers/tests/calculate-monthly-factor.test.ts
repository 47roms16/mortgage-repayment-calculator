import getMonthlyPaymentFactor from "../calculate-monthly-factor";

test("Test calculation for monthly payment multiplier for loan amount", () => {
  expect(getMonthlyPaymentFactor(5.25, 300)).toBeCloseTo(0.0059924, 6);
});

test("Test for 4% interest rate with 240 months repayment term", () => {
  expect(getMonthlyPaymentFactor(4, 240)).toBeCloseTo(0.0060598, 7);
});

test("Test for 0.5% interest rate with 180 months repayment term", () => {
  expect(getMonthlyPaymentFactor(0.5, 180)).toBeCloseTo(0.005767, 5);
  0.005767649596263806;
});

test("Test for 3% interest rate with 120 months repayment term", () => {
  expect(getMonthlyPaymentFactor(3, 120)).toBeCloseTo(0.00965607, 8);
});

test("Test for 7% interest rate with 360 months repayment term", () => {
  expect(getMonthlyPaymentFactor(7, 360)).toBeCloseTo(0.00665, 5);
});

test("Test for 1.75% interest rate with 150 months repayment term", () => {
  expect(getMonthlyPaymentFactor(1.75, 150)).toBeCloseTo(0.00742723, 7);
});
