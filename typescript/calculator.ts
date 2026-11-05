type BinaryOperation = "+" | "-" | "*" | "/" | "^";
type Operation = BinaryOperation | "sqrt";

type Calculation =
  | { operation: "sqrt"; left: number }
  | { operation: BinaryOperation; left: number; right: number };

type CalculationResult =
  | { ok: true; value: number }
  | { ok: false; message: string };

function isOperation(value: string): value is Operation {
  return value === "+" || value === "-" || value === "*" || value === "/"
    || value === "^" || value === "sqrt";
}

function calculate(calculation: Calculation): CalculationResult {
  const { left, operation } = calculation;
  if (operation === "sqrt") {
    if (!Number.isFinite(left)) {
      return { ok: false, message: "Enter a valid number." };
    }
    if (left < 0) {
      return { ok: false, message: "A negative number has no real square root." };
    }
    return { ok: true, value: Math.sqrt(left) };
  }

  const { right } = calculation;
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    return { ok: false, message: "Enter two valid numbers." };
  }
  if (operation === "/" && right === 0) {
    return { ok: false, message: "Cannot divide by zero." };
  }

  let value: number;
  switch (operation) {
    case "+":
      value = left + right;
      break;
    case "-":
      value = left - right;
      break;
    case "*":
      value = left * right;
      break;
    case "/":
      value = left / right;
      break;
    case "^":
      value = left ** right;
      if (Number.isNaN(value) || (left === 0 && right < 0)) {
        return { ok: false, message: "This power is undefined in the real numbers." };
      }
      break;
  }

  if (!Number.isFinite(value)) {
    return { ok: false, message: "The result is too large to represent." };
  }
  return { ok: true, value };
}

const form = document.querySelector<HTMLFormElement>("#calculator");
const leftInput = document.querySelector<HTMLInputElement>("#left");
const operationInput = document.querySelector<HTMLSelectElement>("#operation");
const rightField = document.querySelector<HTMLLabelElement>("#right-field");
const rightInput = document.querySelector<HTMLInputElement>("#right");
const resultOutput = document.querySelector<HTMLOutputElement>("#result");

if (!form || !leftInput || !operationInput || !rightField || !rightInput || !resultOutput) {
  throw new Error("The calculator form is incomplete.");
}

const updateOperation = () => {
  rightField.hidden = operationInput.value === "sqrt";
  resultOutput.textContent = "";
};

operationInput.addEventListener("change", updateOperation);
updateOperation();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const operation = operationInput.value;
  if (!isOperation(operation)) {
    resultOutput.textContent = "Choose a supported operation.";
    return;
  }

  const left = leftInput.valueAsNumber;
  const result = operation === "sqrt"
    ? calculate({ operation, left })
    : calculate({ operation, left, right: rightInput.valueAsNumber });
  resultOutput.textContent = result.ok ? `Result: ${result.value}` : result.message;
});
