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

  operate: function (operator: string, operandOne: string, operandTwo: string) {
    if (operator === 'add') {
      return Calculator.add(parseFloat(operandOne), parseFloat(operandTwo));
    } else if (operator === 'subtract') {
      return Calculator.subtract(
        parseFloat(operandOne),
        parseFloat(operandTwo)
      );
    } else if (operator === 'multiply') {
      return Calculator.multiply(
        parseFloat(operandOne),
        parseFloat(operandTwo)
      );
    } else if (operator === 'divide') {
      return Calculator.divide(parseFloat(operandOne), parseFloat(operandTwo));
    }
  },
};

export default Calculator;
