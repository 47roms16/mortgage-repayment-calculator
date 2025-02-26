export default function checkEmptyInputs(inputs: HTMLInputElement[]): boolean {
  const hasEmpty = inputs.some((input) => input.value === "");

  for (const input of inputs) {
    const labelParent = input.closest(".label-wrap") as HTMLDivElement;
    const inputWrap = labelParent.querySelector(".js-input-wrap") as HTMLDivElement;
    const errorMsgElem = labelParent.querySelector(
      ".js-error-msg",
    ) as HTMLParagraphElement;

    const isEmpty = input.value.trim() === "";

    errorMsgElem.classList.toggle("hidden", !isEmpty);
    inputWrap.classList.toggle("error", isEmpty);
  }

  return hasEmpty;
}
