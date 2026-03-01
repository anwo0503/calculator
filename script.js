function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }

        result = num1 / num2;
    }

    document.getElementById("result").innerText = "Result: " + result;
}

function add() {
    calculate("add");
}

function subtract() {
    calculate("subtract");
}

function multiply() {
    calculate("multiply");
}

function divide() {
    calculate("divide");
}