"use strict";
exports.__esModule = true;
var Calculator = {
    add: function (operandOne, operandTwo) {
        return operandOne + operandTwo;
    },
    subtract: function (operandOne, operandTwo) {
        return operandOne - operandTwo;
    },
    multiply: function (operandOne, operandTwo) {
        return operandOne * operandTwo;
    },
    divide: function (operandOne, operandTwo) {
        var division = operandOne / operandTwo;
        var rounded = Math.floor(division * 100) / 100;
        return rounded;
    },
    operate: function (operator, operandOne, operandTwo) {
        if (operator === 'add') {
            return Calculator.add(parseFloat(operandOne), parseFloat(operandTwo));
        }
        else if (operator === 'subtract') {
            return Calculator.subtract(parseFloat(operandOne), parseFloat(operandTwo));
        }
        else if (operator === 'multiply') {
            return Calculator.multiply(parseFloat(operandOne), parseFloat(operandTwo));
        }
        else if (operator === 'divide') {
            return Calculator.divide(parseFloat(operandOne), parseFloat(operandTwo));
        }
    }
};
// *** OLD  CODE *** //
var display = document.getElementById('display');
var numbers = document.querySelectorAll('.number');
numbers.forEach(function (number) {
    number.addEventListener('click', function (e) {
        var numberValue = e.target.textContent;
        console.log(numberValue);
        updateDisplay(numberValue);
    });
});
function updateDisplay(number) {
    if (number === '.' && display.textContent.includes('.')) {
        return;
    }
    if (display.textContent === '0') {
        if (number === '0' || number === '.') {
            return;
        }
        display.textContent = '';
    }
    else if (operation && previousValue) {
        currentValue += number;
        display.textContent = currentValue;
        return;
    }
    previousValue += number;
    display.textContent = previousValue;
}
var previousValue = '';
var currentValue = '';
function storeValue() {
    if (!previousValue) {
        previousValue = display.textContent;
    }
}
var operation = null;
var operators = document.querySelectorAll('.operator');
operators.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        if (previousValue === '') {
            return;
        }
        storeValue();
        if (previousValue && currentValue) {
            calculate();
            operation = e.target.id;
        }
        else {
            operation = e.target.id;
        }
    });
});
var answer;
var equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', function () {
    calculate();
});
function calculate() {
    if (!previousValue || !currentValue) {
        return;
    }
    answer = Calculator.operate(operation, previousValue, currentValue);
    previousValue = answer;
    currentValue = '';
    display.textContent = answer;
}
var deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteNumber);
function deleteNumber() {
    if (!currentValue) {
        previousValue = String(previousValue).slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
    else {
        currentValue = currentValue.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
}
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', allClear);
function allClear() {
    previousValue = '';
    currentValue = '';
    operation = null;
    display.textContent = '0';
}
exports["default"] = Calculator;
