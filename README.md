# Scientific Calculator

Build the same scientific calculator in multiple widely used programming languages. The goal is to gain a practical foundation in each language by solving a familiar problem and comparing how the implementations work.

## What we'll learn

- Work with variables, numeric types, functions, and control flow.
- Read and validate user input, then handle errors such as division by zero.
- Use each language's standard math library and explore how it handles floating-point precision.
- Run a small program using each language's tooling and try sample calculations.

## Planned calculator features

- Basic arithmetic: addition, subtraction, multiplication, and division.
- Powers, square roots, and logarithms.
- Trigonometric functions: sine, cosine, and tangent.

## Learning approach

Start with basic arithmetic in each language, then add scientific functions. Use the same sample calculations across implementations so differences in syntax, error handling, and numerical behavior are easier to see.

As each implementation is added, give it its own folder with instructions for running it.

## Implementation roadmap

| Language | Status |
| --- | --- |
| Python | Steps 1–4 complete |
| JavaScript | Steps 1 and 2 complete |
| TypeScript | Planned |
| C# | Planned |

## Python

### Step 1 — Basic arithmetic

For basic arithmetic, the command-line calculator takes two numbers and one operator. It supports addition, subtraction, multiplication, and division, with messages for invalid input, unsupported operators, and division by zero. This step practices functions, conditionals, converting input to numbers, and handling exceptions.

Run from the project root with Python 3.

```powershell
python python/calculator.py
```

For example, enter `7`, `/`, and `2` when prompted. The calculator prints `Result: 3.5`.

### Step 2 — Powers and square roots

Use `^` to raise the first number to a power. Use `sqrt` to take the square root of the first number. A square root needs only one input, so the calculator skips the second number prompt.

| Enter at the prompts | Result |
| --- | --- |
| `2`, `^`, `3` | `8` |
| `9`, `sqrt` | `3` |
| `-9`, `sqrt` | A message that the operation is undefined in the real numbers |

This step uses Python's `math` module and introduces operations that take different numbers of inputs.

### Step 3 — Logarithms

Use `log` for a base-10 logarithm and `ln` for a natural logarithm (base `e`). Both take one positive number.

| Enter at the prompts | Result |
| --- | --- |
| `1000`, `log` | `3` |
| `1`, `ln` | `0` |
| `0`, `log` | A message that the operation is undefined in the real numbers |

This step uses `math.log10()` and `math.log()` to show how the base changes the result.

### Step 4 — Trigonometry

Use `sin`, `cos`, or `tan` with one angle in degrees. The calculator uses `math.radians()` to convert the angle before calling Python's trigonometric functions.

| Enter at the prompts | Result |
| --- | --- |
| `30`, `sin` | `0.5` |
| `60`, `cos` | `0.5` |
| `45`, `tan` | `1` |
| `90`, `tan` | A message that the operation is undefined in the real numbers |

Tangent is undefined at odd multiples of 90 degrees. Floating-point rounding can leave a tiny residual in results that are mathematically zero, such as `sin(180°)`.

## JavaScript

### Step 1 — Basic arithmetic

Open [javascript/index.html](javascript/index.html) in a browser. Enter two numbers, choose an operation, and select **Calculate**. For example, enter `7` and `2` and choose division to get `3.5`. Try `0` as the second number to see the division-by-zero message.

This step uses a form submission event to read the inputs, call the arithmetic function, and show the result on the page. The browser runs the HTML and JavaScript directly.

### Step 2 — Powers and square roots

Choose **Power** to raise the first number to the power of the second. Choose **Square root** to use just the first number. The form hides the second number field when you select **Square root**.

| First number | Operation | Second number | Result |
| --- | --- | --- | --- |
| `2` | Power | `3` | `8` |
| `9` | Square root | | `3` |
| `-9` | Square root | | A message that the operation is undefined in the real numbers |

This step uses the `**` operator, `Math.sqrt()`, and a change event to show or hide the second number field.

### Step 3 — Logarithms (planned)
