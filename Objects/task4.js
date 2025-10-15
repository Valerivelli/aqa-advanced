const person = {
    firstName: "Alex",
    lastName: "James",
    age: 17
}

person.email = "test123@testmail.com";
delete person.age;
console.log(person);