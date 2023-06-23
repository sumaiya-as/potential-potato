const exponentOperator = 3**4;
console.log(exponentOperator);
const modulasOperator = 23%4;
console.log(modulasOperator);
let numVariable = 20;
const strVariable = '20';
console.log(numVariable == strVariable); //converts the string into number & then compare & compares only value
console.log(numVariable === strVariable); //compares the original value & data type both
console.log(numVariable != strVariable); //converts the string into number & then compare & compares only value
console.log(numVariable !== strVariable); //compares the original value & data type both
numVariable+=5;  //numVariable = numVariable+5;
console.log(numVariable);
numVariable-=3;
console.log(numVariable);
numVariable *=2;
console.log(numVariable);
numVariable /=2;
console.log(numVariable);
const ifElseOperator = 20 === 20 ? 'values match' : 'values dont match';
console.log(ifElseOperator);
/* this operator works as if else do
if (20 === 20){
    ifElseOperator = 'values match';
} else{
    ifElseOperator = 'values dont match';
} */
let ifElseOperator2 = 20 === '20' ? 'values match' : 'values dont match';
console.log(ifElseOperator2);