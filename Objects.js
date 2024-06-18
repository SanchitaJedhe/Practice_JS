//const tinderUser= new Object(); //singletone object -->{}
const tinderUser={}; //non singletone object -->{}

tinderUser.id="4578"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser ={
    email : "somagirl.com",
    fullname:{
        userFullName:{
        firstName:"sanchita",
        lastName:"Jedhe"
        }

    }
}
//console.log(regularUser.fullname.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//Object.assign(target{},source())
const obj3=Object.assign({},obj1,obj2) //-->{1:a to 4:b} //{} empty array to store other sources
//const obj3={...obj1,...obj2}      //-->{1:a to 4:b} same output
//console.log(obj3);

//array of object
const users=[
    {
        id:1,
        email:"homi@mail.com"
    },
    {
        id:2,
        email:"gomihh@mail.com"
    }
]
// console.log(users[1].id);
// console.log(Object.keys(users));
// console.log(users.hasOwnProperty('name'));


//console.log(regularUser.hasOwnProperty('email')) //-->true


//--------------------------------------------------//
// Destucturing
const Book={
    id:1,
    name:"alchemist",
    price: 500,
    author :"george"
}

console.log(Book) 
//console.log(Book.author) //insted we can also use this (below line) and
// :__ here it used to rename the variable name
const {author : auth }=Book
console.log(auth); //its simple 