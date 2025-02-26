import getMonthlyInterestRate from "./calculate-interest-rate";

export default function getMonthlyPaymentFactor(
  interestRate: number,
  totalMonthsToRepay: number,
): number {
  // * Formula: (r * (1 + r) ** n) / ((1 + r) ** n - 1)
  // * r = monthlyInterestRate
  // * n = totalMonthsToRepay

  // If interest rate is 0, the loan is simply divided evenly over the total months
  if (interestRate === 0) {
    return 1 / totalMonthsToRepay; // no interest, so pay equal parts each month
  }

  const monthlyInterestRate = getMonthlyInterestRate(interestRate);

  const interestOverTime = Math.pow(1 + monthlyInterestRate, totalMonthsToRepay); // (1 + r) ** n

  const monthlyInterestOverTime = interestOverTime * monthlyInterestRate; // (r * interestOverTime)

  const paymentMultiplier = monthlyInterestOverTime / (interestOverTime - 1);

  return paymentMultiplier;
}
