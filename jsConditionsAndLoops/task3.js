const number = 9;

console.log('Таблиця множення (цикл for):');
for (let i = 1; i <= 10; i++) {
  console.log(
    number + ' x ' + i + ' = ' + number * i,
  );
}

console.log('Таблиця множення (цикл while):');
let j = 1;
while (j <= 10) {
  console.log(
    number + ' x ' + j + ' = ' + number * j,
  );
  j++;
}
