let andOperator = (20 === 20 && 10 === 10);
console.log(andOperator); //both sides have to be true to be the answer true
andOperator = (20 === 20 && 10 === 12);
console.log(andOperator);
let orOperator = (20 === 20 || 10 === 10);
console.log(orOperator); //atleast one side has to be true to be the answer true
orOperator = (20 === 20 || 10 === 12);
console.log(orOperator); //atleast one side has to be true to be the answer true
orOperator = (20 === 22 || 10 === 12);
console.log(orOperator); //atleast one side has to be true to be the answer true
