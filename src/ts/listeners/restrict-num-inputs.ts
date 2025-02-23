export default function initRestrictNumInputs(numericInputs: HTMLInputElement[]): void {
  numericInputs.forEach((input) => {
    restrictNumInputs(input);
  });
}

function restrictNumInputs(el: HTMLInputElement): void {
  el.addEventListener("beforeinput", function (e: InputEvent) {
    let beforeValue = el.value; //* Store the value before the input event or before the value changes
    const target = e.target as HTMLInputElement;

    target.addEventListener(
      "input",
      function () {
        const currentValue = el.value;

        // Regex to allow only whole numbers or decimals (e.g., 4, 5.25, 10.77)
        const isTypingDecimal = /^[0-9]*[.]?[0-9]*$/.test(currentValue);

        // Revert the value only if it's invalid value
        if (!isTypingDecimal) {
          el.value = beforeValue;
        }
      },
      { once: true }, // Ensures the listener runs only once per "beforeinput" event trigger, preventing multiple redundant listeners
    );
  });
}
