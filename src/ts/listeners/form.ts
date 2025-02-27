import calculateInterestRepayment from "../helpers/calculate-interest";
import calculateRepayment from "../helpers/calculate-repayment";
import handleInputValidation from "../helpers/errors/handle-validation";

import displayRepaymentResults from "../ui/components/display-result";

export default function initFormListeners(
  formElem: HTMLFormElement,
  loanAmount: HTMLInputElement,
  loanTerm: HTMLInputElement,
  interestRate: HTMLInputElement,
): void {
  const calculateBtn = document.getElementById("calculate-btn") as HTMLButtonElement;

  calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const mortgageType = formElem.querySelector(
      'input[name="mortgage-type"]:checked',
    ) as HTMLInputElement;

    const amount = Number(loanAmount.value);
    const term = Number(loanTerm.value);
    const rate = Number(interestRate.value);

    const inputs = [loanAmount, loanTerm, interestRate];

    const hasError = handleInputValidation(inputs);

    if (hasError) return;

    if (mortgageType.value === "repayment") {
      const [monthlyRepayment, totalRepayment] = calculateRepayment(amount, term, rate);
      displayRepaymentResults(monthlyRepayment, totalRepayment);
    } else if (mortgageType.value === "interest_only") {
      const [monthlyRepayment, totalRepayment] = calculateInterestRepayment(
        amount,
        term,
        rate,
      );
      displayRepaymentResults(monthlyRepayment, totalRepayment);
    }
  });
}
