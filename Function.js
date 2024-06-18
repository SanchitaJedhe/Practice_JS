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
console.log("result",result2);  //-->11