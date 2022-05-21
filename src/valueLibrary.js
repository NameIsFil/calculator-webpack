const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const clearAllButton = document.querySelector('.clearAll');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

let currentText = '';
let previousText = '';
let operation = null;

export {
  numberButtons,
  operationButtons,
  clearAllButton,
  deleteButton,
  equalsButton,
  previousOperandTextElement,
  currentOperandTextElement,
  currentText,
  previousText,
  operation,
};
