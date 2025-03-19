# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("bhaskar);
let btn = document.querySelectorAll('.button');
let body = document.querySelector("body");


btn.forEach(function(button){
   button.addEventListener("click",function(e){
     body.style.backgroundColor = e.target.id;
     console.log(e.target);
   })
})



```