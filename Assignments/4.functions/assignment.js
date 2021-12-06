const DEFAULT_NAME = "sam";
const DEFAULT_GREETING = "hello";

const sayHello = (  name = DEFAULT_NAME) => {
  console.log('hi ' + name);
}

const sayHello1 = (greet = DEFAULT_GREETING, name = DEFAULT_NAME) => {
  console.log(greet + " " + name);
}

const sayHello2 = () => console.log('heyy ' + 'Rana');


const sayHello3 = (callBackHandler, greet = DEFAULT_GREETING, name = DEFAULT_NAME) => {
  callBackHandler(greet + " " + name);
}

const printResult = (result) => {
  console.log(result);
}

const checkInput = (callBackHandler, ...inputs) => {
  if (inputs.length === 0) {
    callBackHandler();
  }
  let print = "";
  for (const iterator of inputs) {
    print = print + " " +iterator;
  }
  console.log(print);
}


sayHello("rana");
// sayHello1("hello", "rana");
sayHello1();
sayHello2();
sayHello3(printResult, "welcome", "Rana");
checkInput(() => console.log("no inputs to show"), "hey", "hello", "welcome", "how are you");

