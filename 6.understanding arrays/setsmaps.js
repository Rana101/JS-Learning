
//SETS

const ids = new Set();
console.log(ids);

const set = new Set(['hi', 'hello', 'welcome']);
console.log(set);
console.log(set[1]); //returns undefined 

//we cannot add duplicates to a set
set.add('hi');
console.log(set);
set.add('heyyy!');
console.log(set);

//to get all the values in a set
for (const entry of set.entries()) { //returns entries
  console.log(entry);
  console.log(entry[0]);
}

for (const value of set.values()) { //returns values
  console.log(value);
} 

set.delete('heyyy!');
console.log(set);


//Maps

//used to link 2 types of data using a key value pair
const person1 = {
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
}

const person2 = {
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
}

const newMap = new Map();
console.log(newMap);
//here person1 used as key is linked to login using the value assigned
const personMapping = new Map([[person1,[{lastLogin:'yesterday', time:'19:32'}]]]);
console.log(personMapping);
console.log(personMapping.get(person1)); //returns the value of the key

//adding new map
personMapping.set(person2, [{lastLogin:'monday', time:'3:23'}]);
console.log(personMapping);

for (const [key, value] of personMapping.entries()) {
  console.log(key);
  console.log(value);
} 

//or
for (const key of personMapping.keys()) {
  console.log(key);
} 

for (const value of personMapping.values()) {
  console.log(value);
} 



//WEAK SET
//only objects can be stored in weak set
//mostly used to quick use and release an object so it can be garbage collected

let p = {name:'rana'};
let q;
const pSet = new WeakSet();
pSet.add(p);
console.log(pSet);
console.log(pSet.has(p));
console.log(pSet.has(q));
pSet.delete(p);
console.log(pSet);

//WEAK MAP
const wkMap = new WeakMap();
console.log(wkMap);
wkMap.set(p,'details');
console.log(wkMap);
wkMap.delete(p);
console.log(wkMap);