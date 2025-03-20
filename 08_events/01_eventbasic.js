//java script runes sequentialy

//dont write inline java script with html tag becoouse that is not good for big projects

//2nd way to use event listener .also you can do 
document.getElementById('owl').onclick = function(){
    alert("owl onclick");
} //this is also not prefrable bcouse here dont get enough funcationality

//3rd and best approch
document.getElementById('owl').addEventListener("click",function(e){
    alert("owl agin clicked");
});

//there are more apporochesh  also which are used earlier
// attachEvent()
//jQuery - on


//event are impotan exam point of view
//type ,timestemp , defaultprevented, target, toElement , 
// srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altKey, ctrlkey, shiftkey, keyCode


//now explanaing third approch 
document.getElementById('owl').addEventListener("click",function(e){
    alert("owl agin clicked");
},false);//bubbling


//event propogation - when you apply multiple events in same area the first inner evet
//will execute then outer this works sequentialy bottom to top 
//and it also depends on false and true if there is nothing that will be treated as false



document.getElementById('owl').addEventListener("click",function(e){
    alert("owl agin clicked");
    e.stopPropagation(); //to stop capturing or bubbling
},true); //capturing
//but if there is true that will treated as top to bottom


//diff btw capturing and bubbling
// Event bubbling and event capturing are two mechanisms describing the order in which event handlers are called when one element is nested inside another, and both elements have registered a handler for the same event. 
// Event Bubbling:
// The event "bubbles up" from the target element (the innermost element where the event occurred) to its parent and then to all its ancestors in the DOM tree until it reaches the root element. 
// Event Capturing:
// The event travels down from the root element to the target element. It offers a way to intercept events before they reach the target element. 


//also we can stop this event propagation - like bubbling and capturing condition \
//use this syntax
e.stopPropagation();


//java script is synchronous language - single threaded(use only one thread)
//still java script is one threaded but this is not slow becouse we don't use java script only we use it with other brouser or node 
//that's why it does'nt affect that much
