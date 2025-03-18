const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //call back function
a
//     console.log(val);
// } )

//call back funtion does'nt has name
 
// coding.forEach( (item) => { //call back function with arraow function
//     console.log(item);
// } )

// function printMe(item){ 
//     console.log(item);
// }

// coding.forEach(printMe) //one of the another way 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )