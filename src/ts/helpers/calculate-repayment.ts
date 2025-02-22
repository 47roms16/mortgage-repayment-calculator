import getMonthlyPaymentFactor from "./calculate-monthly-factor";

// * Mortgage Repayment Formula for Amortizing Loan:
// * M = P * [(r * (1 + r) ** n) / ((1 + r) ** n - 1)]
// *
// * M = Monthly payment
// * P = Loan amount (principal)
// * r = interest rate
// * n = Total number of months to repay (loan term in months)
// *
// * Monthly interest rate formula: interest rate / 100 / 12

export default function calculateRepayment(
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
): number[] {
  const totalMonthsToRepay = loanTerm * 12;

  const paymentMultiplier = getMonthlyPaymentFactor(interestRate, totalMonthsToRepay);

  const monthly = loanAmount * paymentMultiplier;
  const total = monthly * totalMonthsToRepay;

  const monthlyRepayment = Number(monthly.toFixed(2));
  const totalRepayment = Number(total.toFixed(2));

  return [monthlyRepayment, totalRepayment];
}
