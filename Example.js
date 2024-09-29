// <!---------------------------------------------------------------------------->
// diff arrow function and normal function

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

// <!---------------------------------------------------------------------------->
// Closure

function foo(a) {
  let x = a + 10;

  return function () {
    return 5 + x;
  };
}

let t = foo(6);

let total = t();

console.log(total);

// <!----------------------------------------------------------------------------->
// Currying

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// <!------------------------------------------------------------------------------->
// call, apply and bind

function introduce(city) {
  console.log(`Hi, my name is ${this.name}. I live in ${city}. `);
}

let hero = {
  name: "Spiderman",
};

introduce.call(hero, "New York");
introduce.apply(hero, ["New York"]);
// .call() and .apply() are immediately executed

let intro = introduce.bind(hero, "New York");
intro();
// new function (intro) is created with 'this' binded
// to hero object. This function can be later executed.

// <!----------------------------------------------------------------------------------->
// Shallow Copy vs Deep Copy

const original = { name: "John", address: { city: "New York" } };

// Shallow copy using Object.assign() or spread operator
const shallowCopy = { ...original };

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: "Los Angeles" (both objects share the same nested reference)

// deep copy
const originalDeep = { name: "John", address: { city: "New York" } };

// Deep copy using JSON methods (works well for simple objects)
const deepCopy = JSON.parse(JSON.stringify(originalDeep));

// Modifying the nested object in the deep copy
deepCopy.address.city = "Los Angeles";

console.log(originalDeep.address.city); // Output: "New York" (deep copy does not affect the original)
