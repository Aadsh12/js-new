const array=[4,6,7,8,9]
// array.forEach(function(val){

//     console.log(val);
    

// })
array.forEach(element => {
  //  console.log(element);
    
});
function printMe(element){
   // console.log(element);
    
}
array.forEach(printMe)
array.forEach((iteam,index,array)=> {
   // console.log(iteam,index,array);
    
});
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((iteam) => {
    console.log(iteam.languageName);
    
});