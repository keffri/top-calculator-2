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
  return operator(operandOne, operandTwo);
}
