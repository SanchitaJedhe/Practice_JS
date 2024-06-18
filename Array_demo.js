//Arrays
//const myarr=[1,2,8,6,4,3,4] 
//console.log(myarr[0]);

const arr=new Array(1,5,8,7,9,3)


//arrays methods
//myarr.push(3);
//console.log(myarr.pop(1));
//console.log(myarr.shift());
//myarr.shift();
//console.log(myarr.join()); //adds ele into array of string
//console.log(typeof myarr);
//console.log(myarr.includes(5)); //true or false op-->false

//slice ,splice
// console.log("original",arr);

// const my1=arr.slice(1,3);
// console.log("slice",arr); //print  1st and 2nd element
// const my2=arr.splice(1,3); //print 1,2,3 ele.
// console.log("splice",arr); 
// console.log("remaining",arr);

const phool=["rose","lily","sunflower"];
const gadi=["bmw","swift","toyota","tata"];

const con=phool.concat(gadi);
console.log(con);

//spread Operator
const combi=[...phool, ...gadi];
console.log(combi);

console.log(Array.isArray("Value"))
console.log(Array.from("AnyValue"));
