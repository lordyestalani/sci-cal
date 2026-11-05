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
| JavaScript | Steps 1–4 complete |
| TypeScript | Steps 1–4 complete |
| C# | Steps 1–4 complete |

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

### Step 3 — Logarithms

Choose **Base-10 logarithm** for `log` or **Natural logarithm** for `ln` (base `e`). Both take one positive number, so the form hides the second number field.

| First number | Operation | Result |
| --- | --- | --- |
| `1000` | Base-10 logarithm | `3` |
| `1` | Natural logarithm | `0` |
| `0` | Base-10 logarithm | A message that the operation is undefined in the real numbers |

This step uses `Math.log10()` and `Math.log()`. In JavaScript, both functions return `-Infinity` for zero and `NaN` for negative numbers. The calculator shows the same domain error in both cases.

### Step 4 — Trigonometry

Enter an angle in degrees as the first number and choose **Sine**, **Cosine**, or **Tangent**. JavaScript's trigonometric functions take radians, so the calculator multiplies the angle by `Math.PI / 180` first.

| First number | Operation | Result |
| --- | --- | --- |
| `30` | Sine | Approximately `0.5` |
| `60` | Cosine | Approximately `0.5` |
| `45` | Tangent | Approximately `1` |
| `90` | Tangent | A message that the operation is undefined in the real numbers |

Tangent is undefined at odd multiples of 90 degrees. JavaScript displays the computed number directly, so you may see small differences from Python's rounded display.

## TypeScript

### Step 1 — Basic arithmetic and types

With Node.js and npm installed, compile the calculator from the project root.

```powershell
npx --package=typescript@6.0.3 tsc --project typescript
```

Then open [typescript/index.html](typescript/index.html) in a browser. Enter `7` and `2`, choose **Division**, and select **Calculate** to get `3.5`. Recompile after changing the TypeScript source.

The `Operation` type lists the four supported operators, and `CalculationResult` represents either a number or an error message. The browser still supplies the selected operator as text, so the form checks it before calling the calculation function.

### Step 2 — Powers and square roots

Choose **Power** and enter `2` and `3` to get `8`. Choose **Square root** and enter `9` to get `3`. The form hides the second number for square roots. Try `-9` to see the error for a negative input.

The `Calculation` type describes two shapes. A square root takes one number, and a power or arithmetic operation requires two. The form builds the appropriate shape for the selected operation.

### Step 3 — Logarithms

Choose **Base-10 logarithm** and enter `1000` to get `3`, or choose **Natural logarithm** and enter `1` to get `0`. Both use one positive number. Try `0` or a negative number to see the error.

The calculator derives the operation types from the same lists it uses to validate the selected option. Adding `log` and `ln` to the one-number list also makes the form hide the second number field for them.

### Step 4 — Trigonometry

Enter an angle in degrees as the first number and choose **Sine**, **Cosine**, or **Tangent**. The calculator converts the angle to radians before using the math functions.

| First number | Operation | Result |
| --- | --- | --- |
| `30` | Sine | Approximately `0.5` |
| `60` | Cosine | Approximately `0.5` |
| `45` | Tangent | Approximately `1` |
| `90` | Tangent | An error explaining where tangent is undefined |

The three functions join the one-number operation list, so the form hides the second field. The typed calculation result carries either a numeric answer or an error message.

## C#

### Step 1 — Basic arithmetic

With the [.NET 10 SDK](https://learn.microsoft.com/en-us/dotnet/core/install/windows) installed, run this command from the project root.

```powershell
dotnet run --project csharp
```

Enter two numbers and one of `+`, `-`, `*`, or `/` when prompted. Use a period as the decimal separator. For example, enter `7`, `/`, and `2` to get `3.5`. Dividing by zero displays an error.

This step uses the `double` numeric type, `double.TryParse()` to validate input, and a switch expression to select the arithmetic operation.

### Step 2 — Powers and square roots

Enter `2`, `^`, and `3` to get `8`. For a square root, enter `9` and `sqrt` to get `3`. The calculator skips the second number prompt for square roots. Try `-9` with `sqrt` to see the real-number domain error.

The switch expression calls `Math.Pow()` for powers and `Math.Sqrt()` for square roots. In C#, `^` is a bitwise operator, so the calculator accepts it as a menu choice and calls `Math.Pow()` to do the calculation.

### Step 3 — Logarithms

Enter `1000` and `log` to get `3`, or enter `1` and `ln` to get `0`. Both operations use one positive number and skip the second number prompt. Try `0` or a negative number to see the error.

The calculator checks the input before calling `Math.Log10()` for base 10 or `Math.Log()` for base `e`.

### Step 4 — Trigonometry

Enter an angle in degrees, then choose `sin`, `cos`, or `tan`. The calculator converts the angle to radians with `Math.PI / 180` before calling the corresponding C# math function.

| Enter at the prompts | Result |
| --- | --- |
| `30`, `sin` | Approximately `0.5` |
| `60`, `cos` | Approximately `0.5` |
| `45`, `tan` | Approximately `1` |
| `90`, `tan` | An error explaining where tangent is undefined |

Tangent is undefined at odd multiples of 90 degrees. As with the browser versions, floating-point rounding can show a few extra digits.

## Learnings

All four calculators follow the same flow. They read input, validate it, choose an operation, and show a result or an error. The differences are in how each language expresses those steps and how the user interacts with them.

| Language | What this implementation shows |
| --- | --- |
| Python | The terminal version uses `float()` to parse input and catches exceptions such as `ValueError`. A series of `if` statements selects the operation. |
| JavaScript | A browser form submits an event. The handler reads numbers with `valueAsNumber`, checks them at runtime, and updates the result on the page. A change event hides the second field for one-number operations. |
| TypeScript | The browser version uses the same JavaScript math at runtime. Before it runs, TypeScript checks that one-number and two-number calculations have the fields they need. The result type describes either a number or an error message. Input from the form still needs runtime validation. |
| C# | The terminal version declares values as `double`, uses `double.TryParse()` to check whether parsing succeeded, and selects the operation with a switch expression. It uses an invariant culture so a period is the decimal separator. |

- **The same operation can have different syntax.** The calculator accepts `^` for powers in every version. Python and C# call `math.pow()` and `Math.Pow()`, while JavaScript and TypeScript use `**`. Python has `math.radians()` for degree conversion. The other versions multiply by pi divided by 180.
- **The math rules carry across languages.** Square roots and logarithms use one number, while powers use two. Logarithms require a positive input, and tangent is undefined at odd multiples of 90 degrees. The terminal versions skip the second prompt for one-number operations, and the browser versions hide the field.
- **The displayed digits can differ.** For `sin(30°)`, Python displays `0.5` because it formats the result to 15 significant digits. JavaScript, TypeScript, and C# can display `0.49999999999999994`. Running the same examples across versions makes it easier to spot where floating-point rounding and output formatting affect what you see.
