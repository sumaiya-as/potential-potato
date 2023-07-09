const myArray = [4,3,2,1];
function callbackForReduce (sum, arrayItem){
    return sum += arrayItem;
}
const sumResult = myArray.reduce(callbackForReduce, 0); // value 0 is declared for the first item of callback function sum.
console.log(sumResult);
//for calculating average
const avrg = myArray.reduce((summ, item) => summ +=item, 0)/myArray.length;
console.log(avrg); //sum+=item is the function, 0 is initiated to summ
//math method

const arraY = ['pupu', 'pupi', 'buppi', 'chipi', 'chimi', 'chubbu'];
const randomIndex = Math.floor(Math.random() * arraY.length);
console.log(arraY[randomIndex]); 

