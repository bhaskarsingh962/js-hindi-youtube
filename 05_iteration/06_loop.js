const coding =["js" , "ruby" , "java" , "python" ,"cpp"];

// const values = coding.forEach((item) =>{  //for each does'nt return any value
//    console.log(item);
//    return item;
// })

// console.log(values); //will show undefined

const myNums = [1,2,3,4,5,6,7,8,9];

// let newNums = myNums.filter(( num ) => num>4 ) //if you use curly breces then you need to use return keyword
// console.log(newNums);


//using for each
let newNum = [];
myNums.forEach((num) => {
    if(num>4){
        newNum.push(num);
    }
})
console.log(newNum);

//either you can use filter or foreach loop


//new things with filter small project works

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History');

  let userBooks1 = books.filter( (bk) => bk.publish >= 2000);

  console.log(userBooks1);
