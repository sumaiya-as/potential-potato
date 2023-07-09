const arr = [1,2,3,4,5,6,7];
arr.forEach(eachItem => {
    console.log(eachItem);
}) //works like for loop 

const colors = ['red', 'blue', 'orange', 'black', 'white', 'purple'];
let blackExists = false;
colors.forEach(color => {
    if(color === "black"){
        blackExists = true;
    }
})
console.log(blackExists);
//for similar task it is easy to use include()
console.log(colors.includes('black'));

const allOrders = [
    {
        productName : "tea pot",
        isDigital : false,
        isCancelled :false
    },
    {
        productName : "Atomic Habits",
        isDigital : true,
        isCancelled : false
    },
    {
        productName : "The Alchemist",
        isDigital : true,
        isCancelled :true
    }
];
const digitalOrders = allOrders.filter(arrayItem => {
    return arrayItem.isDigital;
})
console.log(digitalOrders);
const digitalCancellOrders = allOrders.filter(orderItem => {
    return orderItem.isDigital && orderItem.isCancelled;
})
console.log(digitalCancellOrders);