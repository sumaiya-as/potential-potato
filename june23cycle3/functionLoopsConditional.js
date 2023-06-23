const arraY = ['uhygf', 'efew', 243, 453, 'refdss',45, 'dfg', '342', 354,89];

for(let i=0; i< arraY.length; i++){
    if(typeof arraY[i] === 'number'){
        console.log(arraY[i]);
    }
}
//use of functions

function myFunction(){
    console.log("this is my function"); //which will not be printed untill i call the function
}
myFunction(); //calling the fuctions
function functioN(parameter1, parameter2){ //parameters are like variables in a function which value we assign while calling the function
    console.log(parameter1);
    console.log(parameter2);
}
functioN("this is the value of parameter1", 'this is the value of parameter2');