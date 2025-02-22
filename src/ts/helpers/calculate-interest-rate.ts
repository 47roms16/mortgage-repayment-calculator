export default function getMonthlyInterestRate(interestRate: number): number {
  // converts annual interest rate % to monthly rate (as decimal)
  return interestRate / 100 / 12;
}
