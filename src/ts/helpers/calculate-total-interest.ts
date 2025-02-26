// *Interest Only Formula:

import getMonthlyInterestRate from "./calculate-interest-rate";

// * M = P * r

// * M = Monthly Interest Payment
// * P = Loan Amount (Principal)
// * r = Annual interest rate (annualInterestRate% / 100 / 12)

export default function calculateInterestPayment(
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
) {
  const totalMonthsToRepay = loanTerm * 12;

  const monthlyInterestRate = getMonthlyInterestRate(interestRate);

  const monthly = loanAmount * monthlyInterestRate;
  const total = monthly * totalMonthsToRepay;

  const monthlyPayment = Number(monthly.toFixed(2));
  const totalPayment = Number(total.toFixed(2));

  return [monthlyPayment, totalPayment];
}
