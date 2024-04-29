function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// let operandFirst = "";
// let operandSecond = "";
// let operator = "";

function operate(num1, operator, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Create the functions that populate the display when
// you click the number buttons.

const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector("#display");

let displayValue = "";

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        display.value += value;
        displayValue += value;
        console.log(displayValue);
    });
});

