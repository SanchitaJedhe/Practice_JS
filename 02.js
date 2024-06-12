console.log("hitesh");
console.log("2"===2);
console.log(undefined == 0);
console.log("--------------------");
//primitive data type
//string,number,boolean,null,undefined,BigInt,Symbol

//refrence type - non primitive 
//Array,Objects,function
//javascript is dyanamic type bcz in variable we canstore diff type of data  
//we dont need to define data type

const isLoggedIn =false
const score=100;
let userEmail;

const id=Symbol('123');
const anotherid=Symbol('123')

console.log(id == anotherid); //false

//Arrays 
const color=["pink","purple","blue"];

//objets
let myObj= {
    name:"anu", //objet are in key value pair
    age:18,

}
console.log(myObj);

//function
const myfun =function(){
    console.log("hello world");
}
console.log(typeof myfun ); // function
console.log(typeof color); //objets
console.log(typeof myobj); //undefined


//stack(primitve) and heap (non-primitive)memory
 
