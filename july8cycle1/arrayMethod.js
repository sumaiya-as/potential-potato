const arr = [1, 2, 3, 4, 5, 6, 7];
const newPop = arr.pop(); //pop() eliminates & returns the last eliment of an array
console.log(newPop); // 7
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.push(7,8,9); //push the elements in the () into an array
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.unshift(-1, 0);
console.log(arr); // inserts eliments from the beginning of an array
arr.slice();
console.log(arr); //return or copy the previous array in we dont put any parameter;
const sliceCopy = arr.slice(4); //need to store in a new variable. eliminate element form index 0 to 4
console.log(sliceCopy); // [3, 4, 5, 6, 7, 8, 9]
arr.splice(4,2);
console.log(arr); // eliminate 2 element starting from index 4
arr.splice(3,1, 11);
console.log(arr); //eliminates 1 element from index 3 & replace the space by 11
console.log(arr.indexOf(5)); // returns the index of any element in an array
const mapMethod = [
    {
        book: "learn to code",
        category: "unknown"
    },
    {
        book: "what is javascript?",
        category: "unknown"
    },
    {
        book: "journey of coding",
        category: "unknown"
    }
];
mapMethod.map(arrayItem => {
    arrayItem.category = "web development";
    console.log(mapMethod);
});
