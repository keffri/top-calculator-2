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

// *** OLD  CODE TO BE UPDATED *** //

const display = document.getElementById('display');

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    let numberValue = (e.target as HTMLElement).textContent;
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
  } else if (operation && previousValue) {
    currentValue += number;
    display.textContent = currentValue;
    return;
  }
  previousValue += number;
  display.textContent = previousValue;
}

let previousValue = '';
let currentValue = '';

function storeValue() {
  if (!previousValue) {
    previousValue = display.textContent;
  }
}

let operation = null;

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    if (previousValue === '') {
      return;
    }
    storeValue();
    if (previousValue && currentValue) {
      calculate();
      operation = (e.target as HTMLElement).id;
    } else {
      operation = (e.target as HTMLElement).id;
    }
  });
});

let answer;

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
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

const deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', deleteNumber);

function deleteNumber() {
  if (!currentValue) {
    previousValue = String(previousValue).slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  } else {
    currentValue = currentValue.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  }
}

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', allClear);

function allClear() {
  previousValue = '';
  currentValue = '';
  operation = null;
  display.textContent = '0';
}

export default Calculator;
