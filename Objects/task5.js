const users = [
    {
        name: "John",
        age: 32,
        email: "test123@testmail.com",
    },
    {
        name: "Peter",
        age: 18,
        email: "testPeter@testmail.com",
    },
    {
        name: "Alex",
        age: 54,
        email: "ALemail123@testmail.com",
    }
]

for (const {name, email, age} of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}