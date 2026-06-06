//singlton
//Object.create
//object.literals

const mysym = Symbol("key1");

const jsuser= {
name: "aadishjain",
age : 20,
gmail :"aadishkumarjain2@gmal.com",
"full name":"aadish kuamrjain",
[mysym]: "mykey1",
islogin: "false",
loginlastday:["monday","tuesday",'friday'],

}
// console.log(jsuser.gmail);
// console.log(jsuser["gmail"]);
// console.log(jsuser["age"]);
// //console.log(jsuser);
// console.log(jsuser[mysym]);

// jsuser.gmail="aadishkumarjain2@chatgpt."
// Object.freeze(jsuser);
// jsuser.gmail="aadishjain890";
// console.log(jsuser);

jsuser.gretting=function(){
    console.log("hello js user ");
}
    jsuser.gretting2=function(){
        console.log(`hello js user,${this.name}`);
    }

console.log(jsuser.gretting());
console.log(jsuser.gretting2());
