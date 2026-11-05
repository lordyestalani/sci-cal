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
    if operation == "log":
        return math.log10(left)
    if operation == "ln":
        return math.log(left)
    raise ValueError("Unknown operation.")


def main():
    binary_operations = ("+", "-", "*", "/", "^")
    unary_operations = ("sqrt", "log", "ln")
    choices = ", ".join(binary_operations + unary_operations)

    try:
        left = float(input("First number: "))
        operation = input(f"Operation ({choices}): ").strip()
        if operation not in binary_operations + unary_operations:
            print(f"Choose one of these operations: {choices}.")
            return
        right = None
        if operation in binary_operations:
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
