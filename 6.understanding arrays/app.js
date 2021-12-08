

const hobbies = ['sports', 'cooking'];
console.log(hobbies);

//adds a new element to the end of array
hobbies.push('dancing');
console.log(hobbies);

//shifts all elements to right and adds new element in the start of array
hobbies.unshift('running');
console.log(hobbies);

//pop removes and returns the last element of the array
const popdata = hobbies.pop();
console.log(hobbies);
console.log(popdata);

//shifts all the elements to the left and removes and returns the first element of the array
const shiftdata = hobbies.shift();
console.log(hobbies);
console.log(shiftdata);

//to replace an element at any position in array
hobbies[1] = "coding";
console.log(hobbies);

//adding value to unused position results in creating empty elements in the unused positions with values of undefined
// hobbies[5]= "swimming";
// console.log(hobbies);

//splice can be used to insert/delete elements anywhere in the array.
//it only works on arrays and not on itterables and array likes 
const returnedValue = hobbies.splice(1, 0, 'archery'); //adds archery in the 2nd position of the array
console.log(returnedValue); //returns empty array bcoz nothing is removed
console.log(hobbies);

const splicedValue = hobbies.splice(1, 1); //removes one element after the first element
console.log(splicedValue); //returns archery as an array
console.log(hobbies);

hobbies.push('photography');
hobbies.push('videoediting');
console.log(hobbies);

const splicedResult = hobbies.splice(-2,1); //removes last 2nd value in the array and returns it
console.log(splicedResult);
console.log(hobbies);



const numbers = [1, 1.54, 2.68, 3, 3.24, 10.99];

//creates a brand new array with the values from the previous array
const newNumbersArray = numbers.slice();
console.log(newNumbersArray);

//can also be used to select a part of the array
const newArray = numbers.slice(1, 3); //selects array elemets from index 1 till index 2 leaving the last index i.e 3
console.log(newArray);
const anotherNew = numbers.slice(0, 4);
console.log(anotherNew);

//we can also select elements from end of the array using negative indexes
const lastElements = numbers.slice(-3);
console.log(lastElements);
const lastElements1 = numbers.slice(-4, -1);
console.log(lastElements1);


//adding a new element at the end of an array and returns a new array
//it is similar to push but when we concat it pulls all the elements out, adds a new element and creates a new array
const newConcat = numbers.concat([3.99, 2]);
console.log(numbers);
console.log(newConcat);

//index of returns the value we pass in the method
const index = numbers.indexOf(3);
console.log(index);
//if the value we pass doesnt exist it returns -1
const index1 = numbers.indexOf(22);
console.log(index1);
//if we have duplicates in an array with same value, index of returns the index of first value
numbers.push(2.68);
console.log(numbers);
const index2 = numbers.indexOf(2.68);
console.log(index2);
const index3 = numbers.lastIndexOf(2.68);
console.log(index3);

//Note: index of returns -1 for object values 

//includes is similar to index of and returns boolean, i.e true if the element exists or false if the element doesnt exist
console.log(numbers.includes(3.24));  //returns true
console.log(numbers.includes(22));  //returns false

//find is used to find the object values in an array
const personData = [
  { id: 01, name: 'rana', age: 30 },
  { id: 02, name: 'sam', age: 40 },
  { id: 03, name: 'alex', age: 35 }
];

console.log(personData);
console.log(personData.indexOf({ id: 01, name: 'rana', age: 30 })); //returns -1 bcoz index of cant find the index of an object

const result = personData.find((person, index, persons) => {
  return person.name === 'alex'; //returns the object which results a true value
});
//it will ignore the duplicates and returns the first matched object it finds
console.log(result);

const resultIndex = personData.findIndex((person, index, persons) => {
  return person.name === 'alex';
});
console.log(resultIndex);


//forEach can be used to get index of the array which is not available in forOf loop
const prices = [20, 49, 30, 22, 98, 78];
const tax = 0.20;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }
// console.log(taxAdjustedPrices);

//we can create a new array using forEach as shown
prices.forEach((price, index, prices) => {
  const resultObj = { index: index, price: price, tax: price * tax, taxAdjustedPrice: price * (1 + tax) };
  taxAdjustedPrices.push(resultObj);
});
console.log(taxAdjustedPrices);

//forEach and forOf needs a new array to be initialized to add the new data values

//map returns the brand new values and stores it in a brand new array by itself....as shown....
//note: map doesnot modify the exisiting array, it adds the changes in the new array only

const taxedPrices = prices.map((price, index, prices) => {
  return { index: index, price: price, tax: price * tax, taxAdjustedPrice: price * (1 + tax) };
});
console.log(prices, taxedPrices);


//sorting array
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);
const reveredData = sortedPrices.reverse();//reverses the sort order of array
console.log(reveredData);

//filtering an array
//it doesnt alter original array, all filtered elemets are added to the new array
const filteredArray = prices.filter(price => price > 30);  //returns arrays which successfully satisfies the condition
console.log(filteredArray);

//reduce method
//a very powerful method for combining values
const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum);



//split splits a string and returns a string array
const data = 'bangalore;10.99;2000';

const transformedData = data.split(';');
console.log(transformedData);

//join joins the string array into a string with a specified separator
const joinedData = transformedData.join(' '); //here space is the separator
console.log(joinedData);

//spread operator
//pulls out all the elemets in an array and copies it to a new array
const mrp = [134, 220, 60, 34, 22, 45, 78];
const newMrpArray = [...mrp];
console.log(newMrpArray);

console.log(Math.min(...mrp));
console.log(Math.max(...mrp));


// NOTE:- spread array copies all the elements into the new array by creating a new addresses to it, but if doesnt alter 
// the addresses of the child elements inside the copied element, hence any change applied to the child element will reflect 
// in both the old array and newly created array....as shown in the example below.


const users = [
  {
    id: 001,
    name: 'will',
    age: 22,
    address: {
      doorNo: '22/A',
      street: "1st main, 3rd cross",
      area: 'kumbalgudu',
      landmark: 'RR Dental college',
      city: 'bangalore',
      pincode: 560024
    },
    logiType: 'user'
  },
  {
    id: 002,
    name: 'phill',
    age: 32,
    address: {
      doorNo: '21/A',
      street: "3st main, 3rd cross",
      area: 'kumbalgudu',
      landmark: 'RR Dental college',
      city: 'bangalore',
      pincode: 560024
    },
    logiType: 'user'
  },
  {
    id: 003,
    name: 'neil',
    age: 42,
    address: {
      doorNo: '18/c',
      street: "12st main, 8rd cross",
      area: 'kumbalgudu',
      landmark: 'RR Dental college',
      city: 'bangalore',
      pincode: 560024
    },
    logiType: 'admin'
  },
  {
    id: 004,
    name: 'pachies',
    age: 50,
    address: {
      doorNo: '9',
      street: "4st main, 6rd cross",
      area: 'kumbalgudu',
      landmark: 'RR Dental college',
      city: 'bangalore',
      pincode: 560024
    },
    logiType: 'admin'
  }
]

const copiedUsers = [...users];
console.log("users ---> ", users);
console.log("copied users ---> ", copiedUsers);

//adding a new user to users
users.push({
  id: 005,
  name: 'allen',
  age: 23,
  address: {
    doorNo: '89',
    street: "9st main, 2rd cross",
    area: 'kumbalgudu',
    landmark: 'RR Dental college',
    city: 'bangalore',
    pincode: 560024
  },
  logiType: 'user'
});

console.log("users ---> ", users);
console.log("copied users ---> ", copiedUsers); //new user is not added to the copied users bcoz it is a new array.

//altering the object elements in an array
users[1].name = 'samuel';

console.log("users ---> ", users);
console.log("copied users ---> ", copiedUsers); 

//same works on copied users also
users[2].name = 'marie';

console.log("users ---> ", users);
console.log("copied users ---> ", copiedUsers); 

//we can overcome this by using map
const newCopiedUsers = users.map(user => ({
  id:user.id,
  name: user.name,
  age: user.age,
  address: user.address, //this doesnt change address of elemets inside address
  // address: {...user.address}, //this will create new addresses to the elements inside address
  logiType: user.logiType
}));

//this method creates new addresses to all elements, but....still any changes in address in original will alter address in the new array also
//it intensionally iuilt that way.... so only alter what is required and keep the rest as it is.


//array destructuring
const array = ['rana', 'galla', 'mr', 30]

const [firstName, lastName, ...otherInfo] = array;
console.log(firstName, lastName, otherInfo);

