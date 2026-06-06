// const tinderuser = new function(){

// }
 const tinderuser=new function(){
 }
tinderuser.id=3445;
tinderuser.name="aadish";
tinderuser.isloggin=false;
 
//console.log(tinderuser);

const regularuser ={
    email:"aadishkuamrjain2@gmail.com",
    user1:{
user2:{
    username:"aadish",


}
    }

    }
console.log(regularuser);

const obj1= {1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//const obj4={obj1,obj2}
//const  obj4=Object.assign(obj1,obj2,obj3)
const obj4={...obj1,...obj2}
console.log(obj4);

const user =[
    {
        id:1,
        mail:"aadishk890"
    },
    {
        id:1,
        mail:"aadish345"
    },
    {
        id:1,
        mail:"aadish466"
    },
]
user[1].mail;
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));

// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggin'));

const course={
    coursename: "javascrpt",
    courseinstructor:"hitash",
    prrice:35666,
    
}
const{courseinstructor:instructor}=course;
console.log(instructor);

