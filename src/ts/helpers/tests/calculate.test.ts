import * as repaymentUtils from "../calculate-repayment";

test("calculate repayment mortgage type", () => {
  const result = repaymentUtils.calculateRepayment(300000, 5.25, 25);
  expect(result).toEqual([1797.74, 539322.94]);
});

test("calculate repayment mortgage type", () => {
  const result = repaymentUtils.calculateRepayment(100000, 4.5, 30);
  expect(result).toEqual([506.69, 182406.71]);
});

test("calculate repayment mortgage type", () => {
  const result = repaymentUtils.calculateRepayment(450000, 5, 30);
  expect(result).toEqual([2415.7, 869651.03]);
});
