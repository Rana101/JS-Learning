
//understanding objects

const person = {
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
  }
}

console.log(person);

//adding a new property
person.loginType = 'user';

//replacing an exisiting property
person.age = 30;

//note: checking for a non-existing property always returns undefined
console.log(person.salary);

//deleting a property
delete person.loginType;

//special keys and square bracket property access
const user = {
  'first name': 'alex',
  'last name': 'jones',
  age: 30,
  1: "some value",
  2.5: 'other value'
}

//we can access the keys like this as shown below
console.log(user['first name']);
console.log(user[1]);
console.log(user[2.5]);


const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

//we can also pass dynamic values to square bracket property access which is very helpful during itteration logic
const keyName = 'last name';
console.log(user[keyName]);

//we can use property access to set key names dynamically
const firstName = "first name";
const lastName = 'last name';

const employee = {
  [firstName]: 'allen',
  [lastName]: 'james',
  age: 30
}

console.log(employee);


//spread operator for object
//most of it work similar to arrays

const obj = {
  name: "max",
  age: 30
};

const newObj = { ...obj };
console.log(newObj);
//we can also save an object to a new object using assign
const anotherObj = Object.assign({},obj);
console.log(anotherObj);

//object destructuring
const {name, age} = obj;
console.log(name, age);