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
| Python | Steps 1 and 2 complete |
| JavaScript | Planned |
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

### Step 3 — Logarithms (planned)
