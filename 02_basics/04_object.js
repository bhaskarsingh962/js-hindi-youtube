//const tinderUser = new Object(); //this is singleton object
const tinderUser = { }  //non singlton object 

tinderUser.id = "123abs";
tinderUser.name = "bhaskar";
tinderUser.loginIn = false;

console.log(tinderUser);
console.log();


//nasting of objects

let userInsta = {
    fullname :{
        firstname : "bhaskar",
        lastname : "singh" 
    }
}

console.log(userInsta.fullname.firstname);
console.log(userInsta.fullname?.firstname); //use question mark if you are not sure that nesting is correct or not


//merze two object

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "c",4: "d"};

//const obj3 = {obj1,obj2}; //it will add one object into another object as a key element 
//console.log(obj3); // not prefer


//2nd type to add
// const obj3 = Object.assign({},obj1,obj2); //this empty curly braces is target and all the strings are getting add into that curly braces
// console.log(obj3);

//3rdtype use spread type
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const user = {

}

console.log(Object.keys(tinderUser)); // use keys as a array
console.log(Object.values(tinderUser)); //use values as array
console.log(Object.entries(tinderUser)); //key and values array

//check that property contain in that object or not 
console.log(tinderUser.hasOwnProperty('loginIn'));
console.log()

//detstructure of object

const course = {
    coursName: "JS",
    price: "199",
    courseInstructer: "hitesh"
}

//if you can do this
// const {courseInstructer} = course;
// console.log(courseInstructer);


//or you change name also
let {courseInstructer: instructer} = course;
console.log(instructer);