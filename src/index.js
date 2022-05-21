import './styles.css';
import {displayCurrentTask} from "./displayCurrentTask";
import {addNumber} from "./addNumber";
import {deleteNumber} from "./deleteNumber";
import {chooseOperation} from "./chooseOperation";
import {executeTask} from "./executeTask";
import {clearEverything} from "./clearEverything";

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

numberButtons.forEach((numberValue) => {
  numberValue.addEventListener('click', () => {
    addNumber(numberValue.innerText);
    displayCurrentTask();
  });
});

deleteButton.addEventListener('click', () => {
  deleteNumber();
  displayCurrentTask();
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    displayCurrentTask();
  });
});

equalsButton.addEventListener('click', () => {
  executeTask();
  displayCurrentTask();
});

clearAllButton.addEventListener('click', () => {
  clearEverything();
  displayCurrentTask();
});
