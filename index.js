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
exports["default"] = Calculator;
