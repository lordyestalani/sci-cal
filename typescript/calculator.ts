const binaryOperations = ["+", "-", "*", "/", "^"] as const;
const unaryOperations = ["sqrt", "log", "ln", "sin", "cos", "tan"] as const;

type BinaryOperation = (typeof binaryOperations)[number];
type UnaryOperation = (typeof unaryOperations)[number];
type Operation = BinaryOperation | UnaryOperation;

type Calculation =
  | { operation: UnaryOperation; left: number }
  | { operation: BinaryOperation; left: number; right: number };

type CalculationResult =
  | { ok: true; value: number }
  | { ok: false; message: string };

function isUnaryOperation(value: string): value is UnaryOperation {
  return unaryOperations.some((operation) => operation === value);
}

function isOperation(value: string): value is Operation {
  return isUnaryOperation(value) || binaryOperations.some((operation) => operation === value);
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function calculateUnary(left: number, operation: UnaryOperation): CalculationResult {
  if (!Number.isFinite(left)) {
    return { ok: false, message: "Enter a valid number." };
  }

  switch (operation) {
    case "sqrt":
      if (left < 0) {
        return { ok: false, message: "A negative number has no real square root." };
      }
      return { ok: true, value: Math.sqrt(left) };
    case "log":
    case "ln":
      if (left <= 0) {
        return { ok: false, message: "Logarithms require a positive number." };
      }
      return { ok: true, value: operation === "log" ? Math.log10(left) : Math.log(left) };
    case "sin":
      return { ok: true, value: Math.sin(toRadians(left)) };
    case "cos":
      return { ok: true, value: Math.cos(toRadians(left)) };
    case "tan":
      if (Math.abs(left % 180) === 90) {
        return { ok: false, message: "Tangent is undefined at odd multiples of 90 degrees." };
      }
      return { ok: true, value: Math.tan(toRadians(left)) };
  }
}

function calculate(calculation: Calculation): CalculationResult {
  if (!("right" in calculation)) {
    return calculateUnary(calculation.left, calculation.operation);
  }

  const { left, operation, right } = calculation;
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
  rightField.hidden = isUnaryOperation(operationInput.value);
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
  const result = isUnaryOperation(operation)
    ? calculate({ operation, left })
    : calculate({ operation, left, right: rightInput.valueAsNumber });
  resultOutput.textContent = result.ok ? `Result: ${result.value}` : result.message;
});
