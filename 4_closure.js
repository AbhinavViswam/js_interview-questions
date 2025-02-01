//closure  :when a function say 'inner' is declared inside a function say 'outer' the inner function has access to the variables declared in its outer scope.

//closure has access to variables in 3 scopes, its own scope, parent scope, global scope

function outer(){
    let x=0;
    function inner(){
        x+=1
        console.log(x);
    }
    return inner;
}

const count=outer();

// count()
// count()



//real life example 

function counter(){
    let x=0;
    return {
        increase:function(){
            x++;
            console.log(x);
        },
        decrease:function(){
            x--
            console.log(x);
        }
    }
}

const newCount = counter()

newCount.increase()
newCount.increase()
newCount.decrease()
newCount.increase()