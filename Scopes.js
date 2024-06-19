//  let var const


if(true){
    let a=10; //can not acces outside of if block scope
    const b=20;//same here
    var c=30; // but here this will print outside of scope

}
// console.log(a);
// console.log(b);
// console.log(c);

//function in two way
//normal

console.log(addNum(5)); //--> 10
function addNum(num1){
    return num1+5
}
// console.log(addNum(5));

//expression way
//executing and calling fun before decleration 
console.log(addNum2(10)); // errorcannot access cz we storing the function in variable
const addNum2 = function(num1){
return num1 + 10
}
// console.log(addNum2(10));