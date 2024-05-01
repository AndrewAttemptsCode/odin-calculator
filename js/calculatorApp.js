// Math functions
function add(num1, num2) {
    return display.textContent = num1 + num2;
}

function subtract(num1, num2) {
    return display.textContent = num1 - num2;
}

function multiply(num1, num2) {
    return display.textContent = num1 * num2;
}

function divide(num1, num2) {
    return display.textContent = num1 / num2;
}

// Operator selection
function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Error";
    }
    return Number.isInteger(result) ? result : result.toFixed(4);
}

// Initializers //

const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.querySelector(".equalsButton");
const clear = document.querySelector(".clearButton");
const decimal = document.querySelector(".decimalButton");

let operandFirst = "";
let operandSecond = "";
let operator = "";

let calculationPerformed = false;

// Event listeners //

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (calculationPerformed) return;

        if (display.textContent === "0") {
            display.textContent = "";
        }
        const value = button.textContent;
        display.textContent += value;
        operator.length === 0 ? operandFirst += value : operandSecond += value;
        console.log(display.textContent);
    });
});

// Operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (operandFirst && operandSecond && operator) {
            let result = operate(+operandFirst, operator, +operandSecond);
            operandFirst = result;
            operandSecond = "";
            display.textContent = result + value;
        } else {
            if (operator) {
                display.textContent = display.textContent.slice(0, -1) + value;    
            } else {
                display.textContent += value;
            }
        }
        operator = value;
        calculationPerformed = false;
        console.log(display.textContent);
    });
});

// Equals button
equals.addEventListener("click", () => {
    let result = operate(+operandFirst, operator, +operandSecond);
    display.textContent = result;
    operandFirst = result;
    operandSecond = "";
    operator = "";
    calculationPerformed = true;
    console.log(display.textContent);
});

// Clear button
clear.addEventListener("click", () => {
    display.textContent = "0";
    operandFirst = "";
    operandSecond = "";
    operator = "";
    calculationPerformed = false;
    console.clear();
});

// Decimal button
decimal.addEventListener("click", () => {
    if (calculationPerformed) return;

    const value = decimal.textContent;
    display.textContent += value;
    operator.length === 0 ? operandFirst += value : operandSecond += value;
    console.log(display.textContent);
});
