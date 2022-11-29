"use strict";
exports.__esModule = true;
var Calculator = {
    previousValue: '',
    currentValue: '',
    operation: null,
    answer: undefined,
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
    },
    updateDisplay: function (number) {
        if (number === '.' && display.textContent.includes('.')) {
            return;
        }
        if (display.textContent === '0') {
            if (number === '0' || number === '.') {
                return;
            }
        }
        else if (Calculator.operation && Calculator.previousValue) {
            Calculator.currentValue += number;
            display.textContent = Calculator.currentValue;
            return;
        }
        Calculator.previousValue += number;
        display.textContent = Calculator.previousValue;
    },
    storeValue: function () {
        if (!Calculator.previousValue) {
            Calculator.previousValue = display.textContent;
        }
    },
    calculate: function () {
        if (!Calculator.previousValue || !Calculator.currentValue) {
            return;
        }
        Calculator.answer = Calculator.operate(Calculator.operation, Calculator.previousValue, Calculator.currentValue);
        Calculator.previousValue = Calculator.answer;
        Calculator.currentValue = '';
        display.textContent = Calculator.answer;
    },
    deleteNumber: function () {
        if (!Calculator.currentValue) {
            Calculator.previousValue = String(Calculator.previousValue).slice(0, -1);
            display.textContent = display.textContent.slice(0, -1);
        }
        else {
            Calculator.currentValue = Calculator.currentValue.slice(0, -1);
            display.textContent = display.textContent.slice(0, -1);
        }
    },
    allClear: function () {
        Calculator.previousValue = '';
        Calculator.currentValue = '';
        Calculator.operation = null;
        display.textContent = '0';
    }
};
/* DOM Elements */
var display = document.getElementById('display');
var numbers = document.querySelectorAll('.number');
var operators = document.querySelectorAll('.operator');
var equalsButton = document.getElementById('equals');
var deleteButton = document.getElementById('delete');
var clearButton = document.getElementById('clear');
numbers.forEach(function (number) {
    number === null || number === void 0 ? void 0 : number.addEventListener('click', function (e) {
        var numberValue = e.target.textContent;
        Calculator.updateDisplay(numberValue);
    });
});
operators.forEach(function (operator) {
    operator === null || operator === void 0 ? void 0 : operator.addEventListener('click', function (e) {
        if (Calculator.previousValue === '') {
            return;
        }
        Calculator.storeValue();
        if (Calculator.previousValue && Calculator.currentValue) {
            Calculator.calculate();
            Calculator.operation = e.target.id;
        }
        else {
            Calculator.operation = e.target.id;
        }
    });
});
equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener('click', function () {
    Calculator.calculate();
});
deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', Calculator.deleteNumber);
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', Calculator.allClear);
exports["default"] = Calculator;
