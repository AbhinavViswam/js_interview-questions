// function can be used for these different purposes

function hello(){
    console.log("hello");
}

// method

var Obj = {
    hello:function(){
        console.log("Hello, Good Morning....",this.name);
    },
    name:"Abhinav"
}

console.log(Obj);
Obj.hello()


//constructor

function Student(name,age){
    this.name=name
    this.age=age
}

var std = new Student("Abhinav",22)

console.log(std.name);
console.log(std.age);