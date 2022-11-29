const Calculator = {
  previousValue: '',
  currentValue: '',
  operation: null,
  answer: undefined,

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

  updateDisplay: function (number: string) {
    if (number === '.' && display.textContent.includes('.')) {
      return;
    }
    if (display.textContent === '0') {
      if (number === '0' || number === '.') {
        return;
      }
    } else if (Calculator.operation && Calculator.previousValue) {
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
    Calculator.answer = Calculator.operate(
      Calculator.operation,
      Calculator.previousValue,
      Calculator.currentValue
    );
    Calculator.previousValue = Calculator.answer;
    Calculator.currentValue = '';
    display.textContent = Calculator.answer;
  },

  deleteNumber: function () {
    if (!Calculator.currentValue) {
      Calculator.previousValue = String(Calculator.previousValue).slice(0, -1);
      display.textContent = display.textContent.slice(0, -1);
    } else {
      Calculator.currentValue = Calculator.currentValue.slice(0, -1);
      display.textContent = display.textContent.slice(0, -1);
    }
  },

  allClear: function () {
    Calculator.previousValue = '';
    Calculator.currentValue = '';
    Calculator.operation = null;
    display.textContent = '0';
  },
};

/* DOM Elements */

const display: HTMLParagraphElement = document.getElementById(
  'display'
) as HTMLParagraphElement;

const numbers = document.querySelectorAll<HTMLButtonElement>('.number');

const operators = document.querySelectorAll<HTMLButtonElement>('.operator');

const equalsButton: HTMLButtonElement = document.getElementById(
  'equals'
) as HTMLButtonElement;

const deleteButton: HTMLButtonElement = document.getElementById(
  'delete'
) as HTMLButtonElement;

const clearButton: HTMLButtonElement = document.getElementById(
  'clear'
) as HTMLButtonElement;

numbers.forEach((number: HTMLButtonElement) => {
  number?.addEventListener('click', (e) => {
    let numberValue: string = (e.target as HTMLElement).textContent;
    Calculator.updateDisplay(numberValue);
  });
});

operators.forEach((operator: HTMLButtonElement) => {
  operator?.addEventListener('click', (e) => {
    if (Calculator.previousValue === '') {
      return;
    }
    Calculator.storeValue();
    if (Calculator.previousValue && Calculator.currentValue) {
      Calculator.calculate();
      Calculator.operation = (e.target as HTMLElement).id;
    } else {
      Calculator.operation = (e.target as HTMLElement).id;
    }
  });
});

equalsButton?.addEventListener('click', () => {
  Calculator.calculate();
});

deleteButton?.addEventListener('click', Calculator.deleteNumber);

clearButton?.addEventListener('click', Calculator.allClear);

export default Calculator;
