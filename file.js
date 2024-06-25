const coding=["js","ruby","java","python","cpp"]


// coding.forEach( function (val){
//     console.log(val);
// })

//another arraow fn way
// coding.forEach((val)=>{
//     console.log(val);
// })

//using  function then for-each
// function printme(values){
//     console.log(values)
// }
// coding.forEach(printme) //giving refrence

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})