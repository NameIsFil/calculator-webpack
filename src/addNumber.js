import {currentText} from "./valueLibrary";

const addNumber = (numberValue) => {
    if (numberValue === '.') {
        if (currentText.includes('.')) {
            return;
        }
        numberValue = '.';
    }
    currentText = currentText.toString() + numberValue.toString();
};

export {addNumber};