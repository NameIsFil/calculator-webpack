import {
    currentOperandTextElement,
    currentText,
    operation,
    previousOperandTextElement,
    previousText
} from "./valueLibrary";

const displayCurrentTask = () => {
    currentOperandTextElement.innerText = currentText;
    const operationToDisplay = operation || '';
    previousOperandTextElement.innerText = previousText + operationToDisplay;
};

export {displayCurrentTask};