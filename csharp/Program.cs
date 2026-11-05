using System;
using System.Globalization;

internal static class Program
{
    public static void Main()
    {
        Console.Write("First number: ");
        if (!TryReadNumber(out double left))
        {
            Console.WriteLine("Enter a valid number.");
            return;
        }

        Console.Write("Operation (+, -, *, /, ^, sqrt, log, ln): ");
        string? operation = Console.ReadLine()?.Trim();
        if (operation is not ("+" or "-" or "*" or "/" or "^" or "sqrt" or "log" or "ln"))
        {
            Console.WriteLine("Choose +, -, *, /, ^, sqrt, log, or ln.");
            return;
        }

        double right = 0;
        if (operation is not ("sqrt" or "log" or "ln"))
        {
            Console.Write("Second number: ");
            if (!TryReadNumber(out right))
            {
                Console.WriteLine("Enter a valid number.");
                return;
            }
        }

        if (operation == "/" && right == 0)
        {
            Console.WriteLine("Cannot divide by zero.");
            return;
        }

        if ((operation is "log" or "ln") && left <= 0)
        {
            Console.WriteLine("Logarithms require a positive number.");
            return;
        }

        double result = Calculate(left, operation, right);
        if (double.IsNaN(result) || (operation == "^" && left == 0 && right < 0))
        {
            Console.WriteLine("This operation is undefined for those inputs in the real numbers.");
            return;
        }

        if (!double.IsFinite(result))
        {
            Console.WriteLine("The result is too large to represent.");
            return;
        }

        Console.WriteLine($"Result: {result.ToString("G", CultureInfo.InvariantCulture)}");
    }

    private static bool TryReadNumber(out double value)
    {
        return double.TryParse(
            Console.ReadLine(),
            NumberStyles.Float,
            CultureInfo.InvariantCulture,
            out value) && double.IsFinite(value);
    }

    private static double Calculate(double left, string operation, double right)
    {
        return operation switch
        {
            "+" => left + right,
            "-" => left - right,
            "*" => left * right,
            "/" => left / right,
            "^" => Math.Pow(left, right),
            "sqrt" => Math.Sqrt(left),
            "log" => Math.Log10(left),
            "ln" => Math.Log(left),
            _ => throw new ArgumentException("Unknown operation.", nameof(operation))
        };
    }
}
