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
console.log();

//function
const myfun =function(){
    console.log("hello world");
}
// console.log(typeof myfun ); // function
// console.log(typeof color); //objets
// console.log(typeof myobj); //undefined


//stack(primitve) and heap (non-primitive)memory
 
//for loop
let myArray =["fruit","batman","kiwi","juice","delhi"]

for(let i=0;i<myArray.length;i++){
    const element=myArray[i];
    //console.log(element);
}


for(let i=0;i<20;i++){
    if(i == 5){
        console.log('detected 5');
        continue
        //break
    }
  //console.log(`vlue labqh eet  ${i}`); 
    
}


//Do-While loop

//while(condition){ }
let index =0
while(index<=10){
    //console.log(`value of index is ${index}`);
    index=index+2
}
//----------------------------------------------
let scores=1
do {
    //1st print what you want and chnages of them
    console.log(`score is ${scores}`);
    scores++
    
} while (scores<=5);