const myBoolean = true;
const mystring = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [myBoolean, mystring];
console.log(myArray[0]);
const myObject = {firstProperty: myArray, sumProperty: firstNumber + secondNumber};
console.log(myObject);
console.log(myObject.firstProperty);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);
const var1 = 20;
const var2 = '40';
const resultVar = var1 + var2;
console.log(resultVar);  //prints 2040
const myArray2 = [20,30,40];
console.log(myArray2[2]);
