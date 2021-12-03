const task1Element = document.getElementById('task-1');
const task3Element = document.getElementById('task-3');

let numbersArray = [];
function generateNumber() {
  const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
  const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

  if (randomNumber >= 0.7) {
    alert(randomNumber);
  }

  if (randomNumber > 0.7 && randomNumber2 > 0.7) {
    alert("both are greater than 0.7");
    console.log(randomNumber, randomNumber2);
  } else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert("one of the number is lesser than 0.2");
    console.log(randomNumber, randomNumber2);
  }

  numbersArray.push(randomNumber);

  for (const iterator of numbersArray) {
    console.log(iterator);
  }

}

function printReverseLoop() {
  for (let i = numbersArray.length - 1; i >= 0; i--) {
    console.log("index-->", i, "--->", numbersArray[i]);
  }
}

task1Element.addEventListener('click', generateNumber);
task3Element.addEventListener('click', printReverseLoop);