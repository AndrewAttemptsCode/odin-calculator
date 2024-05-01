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
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return display.textContent = "Error";
    }
}

// Initializers //

const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.querySelector(".equalsButton");
const clear = document.querySelector(".clearButton");

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
        display.textContent += value;
        operator = value;
        calculationPerformed = false;
        console.log(display.textContent);
    });
});

// Equals button
equals.addEventListener("click", () => {
    let result = operate(+operandFirst, operator, +operandSecond);
    operandFirst = result.toString();
    operandSecond = "";
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

// TODO: Multiple clicks of operator button adds onto the display (e.g. 5 +++ 5)
// TODO: Add a decimal operator