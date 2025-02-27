export default function handleNanError(
  value: string,
  inputWrap: HTMLDivElement,
  errorMsgElem: HTMLParagraphElement,
): boolean {
  const isNan = isNaN(Number(value));
  errorMsgElem.textContent = "Invalid input";

  errorMsgElem.classList.toggle("hidden", !isNan);
  inputWrap.classList.toggle("error", isNan);

  return isNan;
}
