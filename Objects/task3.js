const car1 = {
    brand: "Mazda",
    model: 3,
    year: 2018
}

const car2 = {
    brand: "Toyota",
    model: 'C-HR',
    owner: "John Smith"
}

const car3 = {...car1, ...car2};
console.log(car3);