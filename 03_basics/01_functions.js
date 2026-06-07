// function myname(){
//     console.log("hi");
//     console.log("what is your name ");
    
// }
// myname();


//function addtwonumber(num1,num2){
    
// let result=num1+num2;
// return result
// return num1+num2

// const result=addtwonumber(5,6);
// //console.log("Result: ", result);

function loginusermasseage(username)
{
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just login`
}
//console.log(loginusermasseage());'


function calculator(...num1){
    return num1
    
}
//console.log(calculator(4,5,6,7,8));

const tv={
    name:"samsung",
    model:2014
}

function main(anyobject){
    console.log(`${anyobject.name}  fully hd ${anyobject.model}`);
    }

   main(tv);
   