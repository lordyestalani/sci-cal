function calculate(left, operation, right) {
  switch (operation) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
    case "^":
      return left ** right;
    case "sqrt":
      return Math.sqrt(left);
    default:
      throw new Error("Choose a supported operation.");
  }
}

const form = document.querySelector("#calculator");
const leftInput = document.querySelector("#left");
const operationInput = document.querySelector("#operation");
const rightField = document.querySelector("#right-field");
const rightInput = document.querySelector("#right");
const resultOutput = document.querySelector("#result");

function updateOperation() {
  rightField.hidden = operationInput.value === "sqrt";
  resultOutput.textContent = "";
}

operationInput.addEventListener("change", updateOperation);
updateOperation();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const left = leftInput.valueAsNumber;
  const operation = operationInput.value;
  const needsSecondNumber = operation !== "sqrt";
  const right = rightInput.valueAsNumber;

  if (!Number.isFinite(left) || (needsSecondNumber && !Number.isFinite(right))) {
    resultOutput.textContent = needsSecondNumber
      ? "Enter two valid numbers."
      : "Enter a valid number.";
    return;
  }

  if (operation === "/" && right === 0) {
    resultOutput.textContent = "Cannot divide by zero.";
    return;
  }

  const result = calculate(left, operation, right);
  if (Number.isNaN(result) || (operation === "^" && left === 0 && right < 0)) {
    resultOutput.textContent = "This operation is undefined for those inputs in the real numbers.";
    return;
  }

  resultOutput.textContent = Number.isFinite(result)
    ? `Result: ${result}`
    : "The result is too large to represent.";
});
