const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

//generates and writes calculation log
function showCalcLog(operator, previousResult, currentInput) {
  const calcDescription = `${previousResult} ${operator} ${currentInput}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

//store the log entries as an array
function createLogEntry(operatorName, previousResult, enteredNumber, result) {
  const logEntry = {
    operation: operatorName,
    previousResult: previousResult,
    enteredNumber: enteredNumber,
    result: result
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/*******Calculation functions ********/
function add() {
  const enteredNumber = getUserInput();
  const previousResult = currentResult;
  currentResult += enteredNumber;
  showCalcLog('+', previousResult, enteredNumber);
  createLogEntry("ADD", previousResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const previousResult = currentResult;
  currentResult -= enteredNumber;
  showCalcLog('-', previousResult, enteredNumber);
  createLogEntry("SUBTRACT", previousResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const previousResult = currentResult;
  currentResult *= enteredNumber;
  showCalcLog('*', previousResult, enteredNumber);
  createLogEntry("MULTIPLY", previousResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const previousResult = currentResult;
  currentResult /= enteredNumber;
  showCalcLog('/', previousResult, enteredNumber);
  createLogEntry("DIVIDE", previousResult, enteredNumber, currentResult);
}


//button events
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);