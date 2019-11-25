const defaultResult = 0;
let currentResult = defaultResult;
let logEntriesArray = []; // Array

function getUserNumberInput() {
  return Number(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js
}

// re-sable function that writes and logs data for the calculation
function writeToLog(operation, prevResult, number, result) {
  const logEntryObject = {
    // object
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result
  };
  logEntriesArray.push(logEntryObject);
  console.log(logEntriesArray); // logs the array with objects
  console.log(logEntryObject.result); // logs just some data from an object
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber; // shortcut
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('add', initialResult, enteredNumber, currentResult); // calls re-usable function
  console.log(typeof logEntriesArray); // logs the type of data
}
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('subtract', initialResult, enteredNumber, currentResult); // calls re-usable function
}
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber; // shortcut
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('multiply', initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('devide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
