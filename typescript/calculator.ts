type Operation = "+" | "-" | "*" | "/";

type CalculationResult =
  | { ok: true; value: number }
  | { ok: false; message: string };

function isOperation(value: string): value is Operation {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function calculate(left: number, operation: Operation, right: number): CalculationResult {
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
  }

  if (!Number.isFinite(value)) {
    return { ok: false, message: "The result is too large to represent." };
  }
  return { ok: true, value };
}

const form = document.querySelector<HTMLFormElement>("#calculator");
const leftInput = document.querySelector<HTMLInputElement>("#left");
const operationInput = document.querySelector<HTMLSelectElement>("#operation");
const rightInput = document.querySelector<HTMLInputElement>("#right");
const resultOutput = document.querySelector<HTMLOutputElement>("#result");

if (!form || !leftInput || !operationInput || !rightInput || !resultOutput) {
  throw new Error("The calculator form is incomplete.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const operation = operationInput.value;
  if (!isOperation(operation)) {
    resultOutput.textContent = "Choose a supported operation.";
    return;
  }

  const result = calculate(leftInput.valueAsNumber, operation, rightInput.valueAsNumber);
  resultOutput.textContent = result.ok ? `Result: ${result.value}` : result.message;
});
