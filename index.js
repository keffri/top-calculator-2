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
    }
};
exports["default"] = Calculator;
