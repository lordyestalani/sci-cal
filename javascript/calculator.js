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
    default:
      throw new Error("Choose a supported operation.");
  }
}

const form = document.querySelector("#calculator");
const leftInput = document.querySelector("#left");
const operationInput = document.querySelector("#operation");
const rightInput = document.querySelector("#right");
const resultOutput = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const left = leftInput.valueAsNumber;
  const operation = operationInput.value;
  const right = rightInput.valueAsNumber;

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    resultOutput.textContent = "Enter two valid numbers.";
    return;
  }

  if (operation === "/" && right === 0) {
    resultOutput.textContent = "Cannot divide by zero.";
    return;
  }

  const result = calculate(left, operation, right);
  resultOutput.textContent = Number.isFinite(result)
    ? `Result: ${result}`
    : "The result is too large to represent.";
});
