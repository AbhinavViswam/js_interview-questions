//currying is a method in which function doesnot take all arguments, instead returns a function which takes nest argument and so on...
function mul(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

console.log(mul(5)(5)(5));
console.log(mul(5)(4)(5));