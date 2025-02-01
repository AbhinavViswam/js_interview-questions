const Person = {
    planet:"Earth"
}

console.log("Person:",Person);

const person=Object.create(Person)
console.log(Person.hasOwnProperty('planet'));
console.log(person.hasOwnProperty('planet'));
console.log(person.planet);

delete person.planet
console.log(person.planet); //since planet is not the property of person , it will still show the output as Earth

delete Person.planet
console.log(person.planet);//now it will show undefined