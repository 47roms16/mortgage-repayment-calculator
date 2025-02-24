import getMonthlyInterestRate from "./calculate-interest-rate";

// * Formula for monthly interest payment:
// *
// * M = P * r
// *
// * M = Monthly Payment
// * P = Loan Amount (Principal)
// * r = Monthly Interest Rate (annual interest rate / 100 / 12)

export default function calculateInterestRepayment(
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
): number[] {
  const totalMonthsToRepay = loanTerm * 12;
  const monthlyRate = getMonthlyInterestRate(interestRate);

  const monthly = loanAmount * monthlyRate;
  const total = monthly * totalMonthsToRepay;

  const monthlyRepayment = Number(monthly.toFixed(2));
  const totalRepayment = Number(total.toFixed(2));

  return [monthlyRepayment, totalRepayment];
}
