// Hoisting can’t be achieved by using arrow function
// A normal function can be called from anywhere means we can call a normal function before initialization
// and after initialization without any error.

console.log(add(1, 2)); // 3

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3)); // 5
// But if we call an arrow function before initialization then it will throw an error
// like ReferenceError: Cannot access ….. before initialization.

console.log(add(1, 2));
// ReferenceError: Cannot access 'add' before initialization.

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(2, 3)); // 5
