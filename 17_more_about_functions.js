
// fun() //output: error  , since it is stored as a variable so it is defined at runtime
// fun1() //output: Hello , it is defined at compile time or parse time
var fun= function(){
    console.log("Hello function")
}

function fun1(){
    console.log("Hello");
}

fun1()
fun()