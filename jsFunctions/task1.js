//function declaration
function calculateRectangleArea(width, height) {
  return width * height;
}
console.log(
  'Function declaration: ',
  calculateRectangleArea(5, 10),
);

//function expression
const calculateRectangleAreaExpr = function (
  width,
  height,
) {
  return width * height;
};
console.log(
  'Function Expression:',
  calculateRectangleAreaExpr(5, 10),
);

//arrow function
const calculateRectangleAreaArrow = (
  width,
  height,
) => width * height;
console.log(
  'Arrow Function:',
  calculateRectangleAreaArrow(5, 10),
);
