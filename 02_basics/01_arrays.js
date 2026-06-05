let Arr = [3,6,7,8,9];

console.log(Arr);

console.log(Arr[3]);

const myarr2 = new Array(0,4,6,7,8);

//Arr.push(5);
//Arr.pop(7);

console.log(Arr.includes(7));
console.log(Arr.indexOf(3));

const newarr=Arr.join();

console.log(newarr);

console.log("A",Arr);




//slice splice




const myn1=Arr.slice(1,3);

console.log(myn1);

console.log("B",Arr);

const myn2=Arr.splice(1,3);
console.log(myn2);
console.log("c",Arr);

