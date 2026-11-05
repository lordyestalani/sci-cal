import math


def calculate(left, operation, right=None):
    if operation == "+":
        return left + right
    if operation == "-":
        return left - right
    if operation == "*":
        return left * right
    if operation == "/":
        return left / right
    if operation == "^":
        return math.pow(left, right)
    if operation == "sqrt":
        return math.sqrt(left)
    raise ValueError("Unknown operation.")


def main():
    try:
        left = float(input("First number: "))
        operation = input("Operation (+, -, *, /, ^, sqrt): ").strip()
        if operation not in ("+", "-", "*", "/", "^", "sqrt"):
            print("Choose +, -, *, /, ^, or sqrt.")
            return
        right = None
        if operation != "sqrt":
            right = float(input("Second number: "))
    except ValueError:
        print("Enter a valid number.")
        return
    except EOFError:
        print("Input ended before the calculation was complete.")
        return

    try:
        result = calculate(left, operation, right)
    except ZeroDivisionError:
        print("Cannot divide by zero.")
    except ValueError:
        print("This operation is undefined for those inputs in the real numbers.")
    except OverflowError:
        print("The result is too large to represent.")
    else:
        print(f"Result: {result:.15g}")


if __name__ == "__main__":
    main()
