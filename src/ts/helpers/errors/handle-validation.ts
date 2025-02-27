import handleEmptyError from "./empty-input";
import handleNanError from "./handle-nan-error";

export default function handleInputValidation(
  inputs: HTMLInputElement[],
): boolean | undefined {
  let hasError = false;

  for (const input of inputs) {
    const value = input.value;

    const fieldContainer = input.closest(".input-container") as HTMLDivElement;
    const inputWrap = fieldContainer.querySelector(".js-input-wrap") as HTMLDivElement;
    const errorMsgElem = fieldContainer.querySelector(
      ".js-empty-error",
    ) as HTMLParagraphElement;

    const isEmpty = handleEmptyError(value, inputWrap, errorMsgElem);

    if (isEmpty) {
      hasError = true;
      continue;
    }

    const isNan = handleNanError(value, inputWrap, errorMsgElem);

    if (isNan) {
      hasError = true;
    }
  }

  return hasError;
}
