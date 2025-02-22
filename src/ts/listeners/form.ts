import calculateRepayment from "../helpers/calculate-repayment";
import displayRepaymentResults from "../helpers/display-result";

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

    if (mortgageType.value === "repayment") {
      const amount = parseInt(loanAmount.value);
      const term = parseInt(loanTerm.value);
      const rate = parseFloat(interestRate.value);

      const [monthlyRepayment, totalRepayment] = calculateRepayment(amount, term, rate);
      displayRepaymentResults(monthlyRepayment, totalRepayment);
    } else if (mortgageType.value === "interest_only") {
      console.log("Calculate interest only", mortgageType.value);
    }
  });
}
