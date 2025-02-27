export default function handleEmptyError(
  value: string,
  inputWrap: HTMLDivElement,
  errorMsgElem: HTMLParagraphElement,
): boolean {
  let isEmpty = value === "";

  errorMsgElem.textContent = "This field is required";

  errorMsgElem.classList.toggle("hidden", !isEmpty);
  inputWrap.classList.toggle("error", isEmpty);

  return isEmpty;
}
