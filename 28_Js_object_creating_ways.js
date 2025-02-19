//function

function Person(name,age){
    this.name=name
    this.age=age
}

var person = new Person ("Abhinav",22)

console.log(person.name);
console.log(person.age);


//objectLiteral

var PErson = {
    name:"Abhinav",
    age:22,
    print:function(){
        console.log(this.name,this.age);
    }
}

PErson.print()


//new Object

var object = new Object()

object.name="AbhinavViswam"
object.age=20
object.print = function(){
    console.log(this.name,this.age);
}
object.print()
