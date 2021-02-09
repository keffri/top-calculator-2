"use strict";

function add(operandOne, operandTwo) {
  return operandOne + operandTwo;
}

function subtract(operandOne, operandTwo) {
  return operandOne - operandTwo;
}

function multiply(operandOne, operandTwo) {
  return operandOne * operandTwo;
}

function divide(operandOne, operandTwo) {
  return operandOne / operandTwo;
}

function operate(operator, operandOne, operandTwo) {
  if (operator === "add") {
    return add(parseFloat(operandOne), parseFloat(operandTwo));
  } else if (operator === "subtract") {
    return subtract(parseFloat(operandOne), parseFloat(operandTwo));
  } else if (operator === "multiply") {
    return multiply(parseFloat(operandOne), parseFloat(operandTwo));
  } else if (operator === "divide") {
    return divide(parseFloat(operandOne), parseFloat(operandTwo));
  }
}

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let numberValue = e.target.textContent;
    updateDisplay(numberValue);
  });
});

function updateDisplay(number) {
  if (number === "." && display.textContent.includes(".")) {
    return;
  }
  if (display.textContent === "0") {
    if (number === "0" || number === ".") {
      return;
    }
    display.textContent = "";
  } else if (operation && previousValue) {
    currentValue += number;
    display.textContent = currentValue;
    return;
  }
  previousValue += number;
  display.textContent = previousValue;
}

let previousValue = "";
let currentValue = "";

function storeValue() {
  if (!previousValue) {
    previousValue = display.textContent;
  }
}

let operation = null;

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (previousValue === "") {
      return;
    }
    storeValue();
    if (previousValue && currentValue) {
      calculate();
      operation = e.target.id;
    } else {
      operation = e.target.id;
    }
  });
});

let answer = "";

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
  calculate();
});

function calculate() {
  if (!previousValue || !currentValue) {
    return;
  }
  answer = operate(operation, previousValue, currentValue);
  previousValue = answer;
  currentValue = "";
  display.textContent = answer;
}

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", deleteNumber);

function deleteNumber() {
  if (!currentValue) {
    previousValue = String(previousValue).slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  } else {
    currentValue = currentValue.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  }
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", allClear);

function allClear() {
  previousValue = "";
  currentValue = "";
  operation = null;
  display.textContent = "0";
}
