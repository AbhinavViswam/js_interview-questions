function User(){
    function secretMethod(){
        return "Private method"         //this is a local function not a property of user since it has no 'this' reference 
    }
    this.publicMethod=function(){
        return secretMethod();
    }
}

const user=new User()

console.log(user.secretMethod);
console.log(user.publicMethod());


//output :
//undefined
//Private method



//Class method

class User1{
    #secretMethod() {           //# is used to define a private method and it can only be accessed in the class
        return "private"
    }
    publicMethod(){
        return this.#secretMethod(); //can be accessed within the class        
    }
}

const user1 = new User1();
// console.log(user1.#secretMethod()); //error
console.log(user1.publicMethod());
