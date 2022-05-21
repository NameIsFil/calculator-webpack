import {currentText} from "./valueLibrary";

const chooseOperation = (operator) => {
    if (currentText === '') {
        return;
    }

    operation = operator;
    previousText = currentText;
    currentText = '';
};

export {chooseOperation};