import initFormListeners from "./ts/listeners/form";

document.addEventListener("DOMContentLoaded", () => {
  const formElem = document.getElementById("mortgage-form") as HTMLFormElement;
  const loanAmount = formElem.elements.namedItem("mortgage-amount") as HTMLInputElement;
  const loanTerm = formElem.elements.namedItem("mortgage-term") as HTMLInputElement;
  const interestRate = formElem.elements.namedItem("interest-rate") as HTMLInputElement;

  initFormListeners(formElem, loanAmount, loanTerm, interestRate);
});
