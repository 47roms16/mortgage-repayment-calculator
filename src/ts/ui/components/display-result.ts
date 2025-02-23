export default function displayRepaymentResults(monthly: number, total: number): void {
  const emptyResult = document.querySelector(".js-result-empty") as HTMLDivElement;
  const resultWrap = document.querySelector(".js-result-wrap") as HTMLDivElement;

  emptyResult.classList.add("hidden");
  resultWrap.classList.remove("hidden");

  const monthlyElem = document.getElementById(
    "monthly-repayment-output",
  ) as HTMLSpanElement;
  const totalElem = document.getElementById("total-repayment-output") as HTMLSpanElement;

  const monthlyFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "symbol",
  }).format(monthly);
  const totalFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "symbol",
  }).format(total);

  monthlyElem.textContent = monthlyFormatted;
  totalElem.textContent = totalFormatted;
}
