//methods by which we can empty an array

let arr=[1,2,3,4]
let newarr=arr
console.log(arr);

//1
// arr.length=0;
// console.log(arr);    
// console.log(newarr);        //it will empty all the referenced array too

//2
// arr=[]                       //it will not empty the referenced array
// console.log(arr);
// console.log(newarr);

//3
// arr.splice(0,arr.length)     //it will empty all the referenced array too
// console.log(arr);
// console.log(newarr);


//4
// while(arr.length){
//     arr.pop()                       //it will empty all the referenced array too
// }
// console.log(arr);
// console.log(newarr);
