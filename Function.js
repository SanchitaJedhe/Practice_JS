//function defination
function calling(){ 
    console.log("hello");
    console.log("my");
    console.log("name");
    console.log("milo");
}
//function refrence   --> calling
//function execution
// calling();

function addition(n1,n2){ //here is a defination and passing the parameter
    console.log(n1+n2);
}
//addition(5,3); //  when we are calling and passing the arguments

//now we stored this to result variable so

//const result = addition(10,3)
//console.log(result);  //--> undefined  
// why? so the here we saving the func op to anither outside in variable

// function have their rule and scope if we want this then we have to mention return in function at last 
function addition2(n1,n2){
    // let result= n1+n2
    // return result //or
    return n1+n2
}
const result2 = addition2(8,3)
//console.log("result",result2);  //-->11


//rest opertor(...)
function calculatePrice(...num1){
    return num1
}
//console.log(calculatePrice(200,100,80,64,9000))

//bab
//handling the object in funtion
const meUser = {
    name:"sanuu",
    id : 15
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and id is ${anyObject.id}`)
}

//handleObject(meUser);

// handleObject({
//     name : "maya",
//     id : 56
// })

 const mynewArray=[20,80,90,66]
 function returnSecValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecValue(mynewArray));

 //---------------------------------------------------------------------------------------
 //-------Arrow function
 // this ==current context

 const user={
    username :"mini",
    age : 23,

    WelcomeMsg : function(){
        console.log(`hi ${this.username} , welcome to website`)
    }
 }
//  user.WelcomeMsg();
//  user.username="sanchi"
//  user.WelcomeMsg() //changing valure cz this giving the current context

 //console.log(this); //-->empty objects.

 //const chai
 const chai = ()=>{
    let name1 ="sam"
    console.log(this.name1);
 }
 //console.log(chai()); //--> undefined

 //arrow function
 //regulaar
 const login=function(){

 } 
   //o r
 const login1 = ()=>{
console.log("logged in ")
 }
 login1();

 //regular way
 const substraction=function(n1,n2){
    return n1+n2
 }
 const sub=substraction(5,5);
 console.log(sub);
//using arraow


const substraction2=(n1,n2)=>n1+n2;
const sub2=substraction2(10,10);
//if er r having return in key value format then use this
//const substraction2=(n1,n2)=> ({username:"sanchita"})
console.log(sub2);

 //-----------------------------------------------
 //Immedietly invoked function expression(IIFE)
//  (function  fun1(){
//     console.log("hi dear")
//  })();

((name)=>{
    console.log(`hi my name is ${name}`)

})("sanchita");

