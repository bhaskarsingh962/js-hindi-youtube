//var c = 98; //var create issue prefer to use let.
// if(true){
//     let a= 98;
//     const b = 34;
//     var c = 45;
// }

//console.log(a); // this a is fine becouse it able to access only it's scope
//console.log(b);// b is also fine can be accessed into scope only
//console.log(c);//but var can acces outside the scope also which is not a good prectice that's why we dont use var


let a = 92;
if(true){
        let a= 98;
        const b = 34;
        console.log(a);
}

console.log(a); //work with only scope


//function scope

function one(){
    const username = "bhaskar";
    
    function two(){
        const website = "bhaskar";
        console.log(username); //it can be access becouse username is global scope for this 
    }

    //console.log(website);

    two();
}
one();