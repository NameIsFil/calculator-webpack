import {currentText, operation, previousText} from "./valueLibrary";
import {clearEverything} from "./clearEverything";

const executeTask = () => {
    const numberOne = Number(previousText);
    const numberTwo = Number(currentText);
    previousText = currentText;
    if (operation === '+') {
        currentText = numberOne + numberTwo;
    } else if (operation === '-') {
        currentText = numberOne - numberTwo;
    } else if (operation === 'x') {
        currentText = numberOne * numberTwo;
    } else if (operation === '÷') {
        if (numberTwo === 0) {
            clearEverything();
            return;
        }
        currentText = numberOne / numberTwo;
    } else if (operation === '^') {
        currentText = Math.pow(numberOne, numberTwo);
    } else if (operation === '%') {
        currentText = (numberOne / 100) * numberTwo;
    }
    previousText = '';
    operation = null;
    return;
};

export {executeTask};