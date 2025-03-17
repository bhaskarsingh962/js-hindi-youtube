//dates

let myDate = new Date();
console.log(myDate); //this showes simple date format
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());



//type of date is object

console.log(typeof myDate); //object

console.log();


//moth start from 0 in java script
let myCreatedDate = new Date(2027,4,23,5,6); //it will just show paseed value also date can be passed here
console.log(myCreatedDate.toLocaleString());
console.log();



//time stemp value

let myTimeStamp = Date.now();//returns the current time in milliseconds since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch).
console.log(myTimeStamp); 
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converting current time 1000 ms = 1 second).

console.log();


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1); //it starts from 0 we can do plus one also
console.log(newDate.getHours()); //show date time day