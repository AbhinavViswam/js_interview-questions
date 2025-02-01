//delete is used to delete element from an object

// var output=(function(x){
//     delete x;
//     return x;
// }(10))
//output 10 ,since x is not an object

var x={'a':1}
var output=(function(){
    delete x.a;
    return x;
})()

console.log(output);

//output: {} ,it deletes the value of the object