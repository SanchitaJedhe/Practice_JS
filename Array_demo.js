//Arrays
//const myarr=[1,2,8,6,4,3,4] 
//console.log(myarr[0]);

//const arr=new Array(1,5,8,7,9,3)


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
//console.log(con);

//spread Operator
// const combi=[...phool, ...gadi];
// console.log(combi);

// console.log(Array.isArray("Value"))
// console.log(Array.from("AnyValue"));


//----------------------------------------------
//HIgh order array loops
//for of
// for (const iterator of object) {
    
// }

const arr=[11,22,34,46,57,69]
const gretings="Hello World"
for (const num of arr) {
    //console.log(num);
}

for (const gereet of gretings) {
   // console.log(`each char is ${gereet}`);
}

//Maps
//save unique vlaue only
const map=new Map();
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"france")
//console.log(map);

for (const key of map) {
    //console.log(key);
}

//if want seprate key and value not in array format then do
for (const [key,value] of map) {
    //console.log(key ,":-" ,value);
}

//for in loop for arr
for (const key in arr) {
    //console.log(key); will print index means arr key, but we wanr value then
    console.log(arr[key]);
   
}