const numbers = [10, 22, 3, 74, 2, 15];

//#1
const filteredNumbers = numbers.filter(number => number > 5);
console.log(filteredNumbers);

const mappedNumbers = numbers.map(number => ({ num: number }));
console.log(mappedNumbers);

const product = numbers.reduce((preValue, curvalue) => preValue * curvalue, 1);
console.log(product);

//#2
const max = Math.max(...numbers);
console.log(max);

//#3

const [minVal, maxVal] = [Math.min(...numbers), Math.max(...numbers)];
console.log(minVal, maxVal);

//#4
const list = new Set(numbers);
console.log(list);