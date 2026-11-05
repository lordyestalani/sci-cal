function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

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
    case "log":
      return Math.log10(left);
    case "ln":
      return Math.log(left);
    case "sin":
      return Math.sin(toRadians(left));
    case "cos":
      return Math.cos(toRadians(left));
    case "tan":
      if (Math.abs(left % 180) === 90) {
        return NaN;
      }
      return Math.tan(toRadians(left));
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
const unaryOperations = ["sqrt", "log", "ln", "sin", "cos", "tan"];

function updateOperation() {
  rightField.hidden = unaryOperations.includes(operationInput.value);
  resultOutput.textContent = "";
}

operationInput.addEventListener("change", updateOperation);
updateOperation();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const left = leftInput.valueAsNumber;
  const operation = operationInput.value;
  const needsSecondNumber = !unaryOperations.includes(operation);
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
  const logarithmOfZero = (operation === "log" || operation === "ln") && left === 0;
  const zeroToNegativePower = operation === "^" && left === 0 && right < 0;
  if (Number.isNaN(result) || logarithmOfZero || zeroToNegativePower) {
    resultOutput.textContent = "This operation is undefined for those inputs in the real numbers.";
    return;
  }

  resultOutput.textContent = Number.isFinite(result)
    ? `Result: ${result}`
    : "The result is too large to represent.";
});
