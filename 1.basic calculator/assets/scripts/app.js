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

function calculateResult(operator) {

  const enteredNumber = getUserInput();

  if (
    operator !== 'ADD' &&
    operator !== 'SUBTRACT' &&
    operator !== 'MULTIPLY' &&
    operator !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  const previousResult = currentResult;
  let mathOperator;
  if (operator === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (operator === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (operator === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (operator === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  showCalcLog(mathOperator, previousResult, enteredNumber);
  createLogEntry(operator, previousResult, enteredNumber, currentResult);
}

function calculate(operation) {
  const enteredNumber = getUserInput();
  const previousResult = currentResult;
  if (operation === 'ADD') {
    calculateResult(operation);
  } else if (operation === "SUBTRACT") {
    calculateResult(operation);
  } else if (operation === "MULTIPLY") {
    calculateResult(operation);
  } else {
    calculateResult(operation);
  }
}

//button events
addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));