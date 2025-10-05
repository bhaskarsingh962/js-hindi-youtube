console.log(2>1);
console.log(3<1);
console.log(2==4);

//prefer to do comparison btw same data types


console.log("2" > 1); //not prefer to do comparision btw diff data type
console.log("02" >1);



//here the reson is equality check == and comparision <> <= >= work diffrently
//comparisons convert null to a number treating it as 0 thats why null >= 0 is true and null > 0 false consider null as 0

//these coparisons are not preferable
console.log(null > 0);
console.log(null == 0); //false will not consider null to zero
console.log(null <= 0); //true becouse 0<=0


console.log(undefined >= 0); //undefind always give false 

//=== strict check (data type check)

console.log();
console.log("2"==2); //will not check data type
console.log("2"===2); // it will check data type value everything

