const Calculator = {
  add: function (operandOne: number, operandTwo: number) {
    return operandOne + operandTwo;
  },

  subtract: function (operandOne: number, operandTwo: number) {
    return operandOne - operandTwo;
  },

  multiply: function (operandOne: number, operandTwo: number) {
    return operandOne * operandTwo;
  },

  divide: function (operandOne: number, operandTwo: number) {
    let division = operandOne / operandTwo;
    let rounded = Math.floor(division * 100) / 100;
    return rounded;
  },
};

export default Calculator;
