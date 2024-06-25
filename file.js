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


//for each with arrow
coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
})

const myCoding=[
    {
        langName:"javascript",
        filename:"js",
        year:1999,
        book:"js for react"
    },
    {
        langName:"java",
        filename:"java",
         year:1980,
        book:"mastering java"
    },
    {
        langName:"python",
        filename:"py",
        year:2003,
        book:"python for data science"
    },
]

myCoding.forEach((item)=>{
    //console.log(item.filename,item.langName);
})


const Numbers=[1,2,3,4,5,6,7,8,9,10]
//Numbers.filter((num)=>num>4) //will not print have to store

//const newNum=Numbers.filter((num)=>num>4)
//or
const newNum=Numbers.filter((num)=>{ //here defining scope so have to write reutrn
    return num>4})

//console.log(newNum)

//using foreach 
//createing  emptyy arr to store value
const newNArr=[]
Numbers.forEach((num)=>{
    if (num>5){
        newNArr.push(num)
    }
})
//console.log(newNArr)


// using foreach in object array
let ouput= myCoding.filter((op)=>op.year <=2000 )
ouput=myCoding.filter((op)=>{ return op.filename === "java" && op.year == 1980})
//console.log(ouput)

//map and arrow for arr
let newarr=Numbers.map((item)=>{return item +10})
//console.log(newarr)
//console.log(Numbers)

newarr = Numbers.map((num)=> num*10)
               .map((num) => num+5)
               .filter((num) => num>=55)
//console.log(newarr)

const arey=[1,2,3]
let reducearr=arey.reduce((acc,curr)=> acc+curr,0)
reducearr=arey.reduce((acc,curr)=> {
    console.log(`accumulator: ${acc} and current value: ${curr}`);
    return acc+curr
},0)
console.log(reducearr)