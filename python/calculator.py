def calculate(left, operation, right):
    if operation == "+":
        return left + right
    if operation == "-":
        return left - right
    if operation == "*":
        return left * right
    return left / right


def main():
    try:
        left = float(input("First number: "))
        operation = input("Operation (+, -, *, /): ").strip()
        if operation not in ("+", "-", "*", "/"):
            print("Choose +, -, *, or /.")
            return
        right = float(input("Second number: "))
        result = calculate(left, operation, right)
    except ValueError:
        print("Enter a valid number.")
    except ZeroDivisionError:
        print("Cannot divide by zero.")
    except EOFError:
        print("Input ended before the calculation was complete.")
    else:
        print(f"Result: {result:.15g}")


if __name__ == "__main__":
    main()
