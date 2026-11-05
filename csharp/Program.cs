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

        Console.Write("Operation (+, -, *, /): ");
        string? operation = Console.ReadLine()?.Trim();
        if (operation is not ("+" or "-" or "*" or "/"))
        {
            Console.WriteLine("Choose +, -, *, or /.");
            return;
        }

        Console.Write("Second number: ");
        if (!TryReadNumber(out double right))
        {
            Console.WriteLine("Enter a valid number.");
            return;
        }

        if (operation == "/" && right == 0)
        {
            Console.WriteLine("Cannot divide by zero.");
            return;
        }

        double result = Calculate(left, operation, right);
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
            _ => throw new ArgumentException("Unknown operation.", nameof(operation))
        };
    }
}
