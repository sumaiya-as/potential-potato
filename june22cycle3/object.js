const objectVariable = {prop1: 10, prop2: 'long'};
console.log(objectVariable);
console.log(objectVariable.prop2);
const nestedObject = {
    layer1:{
        layer2:{
            layer3:{
                targetValue:'You found me!'
            }
        }
    }
}
console.log(nestedObject.layer1.layer2.layer3.targetValue);
console.log(objectVariable['prop1']);  //another technique
const functionContainerVariable = function(){
    return 20;
};
console.log(functionContainerVariable);
