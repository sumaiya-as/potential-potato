//arrow function
const arrowFunction = () => {
    //console.log('This is an arrow function');
    const a = 3**3;
    return a; //we have return the output we want
}
const result = arrowFunction();
console.log(result); //unless returning the function it wont be printed
//we also return expression & function
//self-challenge: reversing a string & converting it to uppercase with built in function
const givenString = 'Mahabub';
let step1 = givenString.toUpperCase().split("");
console.log(step1);
//console.log(typeof step1); //showing as object
const step2 = step1.reverse();
let reverseString = step2.join("");
console.log(reverseString);
 