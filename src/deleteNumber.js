import {currentText} from "./valueLibrary";

const deleteNumber = () => {
    currentText = currentText.toString().slice(0, -1);
};

export {deleteNumber}