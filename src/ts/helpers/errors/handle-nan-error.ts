export default function checkIfNaN(inputs: HTMLInputElement[]): boolean {
  const hasNaN = inputs.some((input) => isNaN(Number(input.value)));

  for (const input of inputs) {
    const labelParent = input.closest(".label-wrap") as HTMLDivElement;
    const inputWrap = labelParent.querySelector(".js-input-wrap") as HTMLDivElement;
    const errorMsgElem = labelParent.querySelector(
      ".js-error-msg",
    ) as HTMLParagraphElement;

    errorMsgElem.textContent = "Invalid input";

    const isNotNumber = isNaN(Number(input.value));

    errorMsgElem.classList.toggle("hidden", !isNotNumber);
    inputWrap.classList.toggle("error", isNotNumber);
  }

  return hasNaN;
}
