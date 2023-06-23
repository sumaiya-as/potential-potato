//challenge 1
let numVariable = 0;
numVariable ++;
numVariable ++;
numVariable ++;
console.log(numVariable);
//challenge 2
//both are same
//challenge 3
const expression5 = !(((100%50)<(100/50)) && (300+5 === 305));
console.log(expression5);
//challenge 4: answer will be true
const myObj = {
    prop1 : 'x',
    prop2 : 20
};
const myArray = [40, 50, 2];
const result = myObj.prop2 === (myArray[0]/myArray[2]);
console.log(result);
//challenge 5: evaluates true
const obJ = {
    nestedObj1: {
        price: 100,
        quantity: 5
    }, 
    nestedObj2: {
        price: 150,
        quantity: 2
    }
};
const arraY = [obJ.nestedObj1, obJ.nestedObj2];
const result1 = (arraY[0].price * arraY[0].quantity) > (arraY[1].price * arraY[1].quantity);
console.log(result1);