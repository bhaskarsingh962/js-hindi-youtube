//reduce method

const myNum = [1,2,3,4,5];

// const newNum = myNum.reduce(function (accumlater , currentValue){
//     console.log(`accum is ${accumlater} and currval is ${currentValue}` );
//     return accumlater + currentValue;
// },0) //this zero is initial value for accumlater

// console.log(newNum);

const newNum = myNum.reduce((accum,currvalue)=>{
    console.log(`accum is ${accum} and currval is ${currvalue}`);
    return accum + currvalue;
},0);



//if want final value direct in that time 
// const newNum = myNum.reduce((accum,currvalue)=>
//     accum + currvalue,0
// ); 
console.log(newNum);


//real time use 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);