const task3Element = document.getElementById('task-3');

function alertFunction1() {
  alert("alert function without params");
}

function alertFunction2(alertData) {
  alert(alertData);
}

function alertFunction3(str1, str2, str3) {
  return str1 + ' ' + str2 + ' ' + str3;
}

alertFunction1();
alertFunction2("alert with params");
alert(alertFunction3("this", "is", "sparta"));

task3Element.addEventListener('click', alertFunction1);