function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        console.log("Error: Both arguments must be numbers");
        return;
    }

    if (denominator === 0) {
        console.log("Error: Division by zero is impossible");
        return;
    }

    console.log("Result: ", numerator / denominator);
}

try {
    divide(10, 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    divide(8, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    divide("qwe", 5);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

