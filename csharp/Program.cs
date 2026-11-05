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

        const string operations = "+, -, *, /, ^, sqrt, log, ln, sin, cos, tan";
        Console.Write($"Operation ({operations}, trig angles in degrees): ");
        string operation = Console.ReadLine()?.Trim() ?? string.Empty;
        bool takesTwoNumbers = operation is "+" or "-" or "*" or "/" or "^";
        if (!takesTwoNumbers && operation is not ("sqrt" or "log" or "ln" or "sin" or "cos" or "tan"))
        {
            Console.WriteLine($"Choose one of these operations: {operations}.");
            return;
        }

        double right = 0;
        if (takesTwoNumbers)
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

        if (operation == "tan" && Math.Abs(left % 180) == 90)
        {
            Console.WriteLine("Tangent is undefined at odd multiples of 90 degrees.");
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
            "sin" => Math.Sin(ToRadians(left)),
            "cos" => Math.Cos(ToRadians(left)),
            "tan" => Math.Tan(ToRadians(left)),
            _ => throw new ArgumentException("Unknown operation.", nameof(operation))
        };
    }

    private static double ToRadians(double degrees)
    {
        return degrees * (Math.PI / 180);
    }
}
