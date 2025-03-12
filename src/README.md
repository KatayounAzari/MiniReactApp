# Knowladge Base 

## Functional components vs Class Components

- Functional components do not have a state or lifecycle methods

- Class components have a state and can implement lifecycle methods like componentDidMount and componentDidUpdate

# React Hooks

- Hooks were added to React in version 16.8. 

- Hooks are functions which allow functional components to have access to state and other React features. Because of this, class components are generally no longer needed.

    - Examples: useState(), useEffect(), useContext(), useRef(), useReducer(), useCallback(), useMemo() and Custom Hooks.

- useState() allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

- useEffect() allows you to perform side effects in your components. Examples: fetching data, directly updating the DOM, and timers.

- useContext() is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

- useRef() allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

- useReducer() is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

- useCallback() returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update. This can improve performance.

- useMemo() eturns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update.This can improve performance.
    - The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

# React Classes

- **Class components were used for:**
    - To keep data in state
    - To use lifecycle methods 
    - To pass props from classes to functional components
However all these now possibile with react hooks.

# Functions

- `function App() {}` is a function declaration.

- `const testText = () => {}` is a function expression using arrow function syntax.

- Hoisting: 
        - Function Declaration - This type of function is hoisted to the top of its scope, meaning you can call it before it's defined in the code.
            App(); // Works fine because of hoisting
            function App() {
                console.log('Hello');
            }
        - Function Expression - This is not hoisted. The variable is hoisted, but the function itself is assigned to the variable only when the code reaches that line.
            testText(); // Error: Cannot access 'testText' before initialization
            const testText = () => {
            console.log('Hello');
            }
    - Binding of `this`:
        - Function Declaration - It has its own `this` context, which can change depending on how the function is called.
            function App() {
                console.log(this);
            }
        - Arrow Function - Arrow functions do not have their own this. Instead, they lexically inherit the this from the surrounding code (the parent scope). This makes arrow functions useful when you want to maintain the context of this from the outer scope.
            const obj = {
            name: 'test',
            regularFunc: function() {
                console.log(this.name); // 'test'
            },
            arrowFunc: () => {
                console.log(this.name); // Undefined or global context
            }
            };
            obj.regularFunc(); // 'test'
            obj.arrowFunc();   // Undefined or global context

# ES6 Recap

## Variable declarations `var`, `let`, and `const`
In JavaScript, var, let, and const are used to declare variables, but they behave differently in terms of scope, re-assignment, and hoisting.

- `var`
        Scope: var is function-scoped, which means it is accessible within the entire function where it's declared, even before its actual declaration (because of hoisting).
        Re-assignment: You can re-assign and re-declare var variables.
        Hoisting: Variables declared with var are hoisted (moved to the top of their scope), but they are initialized as undefined.

        function exampleVar() {
        console.log(x); // Outputs: undefined (due to hoisting)
        var x = 10;
        console.log(x); // Outputs: 10
        }

        exampleVar();

- `let`
        Scope: let is block-scoped, which means it is only accessible within the block (e.g., {}) where it is defined.
        Re-assignment: You can re-assign let variables but cannot re-declare them in the same scope.
        Hoisting: let is hoisted but not initialized, so if you try to use it before declaration, you’ll get a ReferenceError.

        function exampleLet() {
        // console.log(y); // ReferenceError (y is not hoisted like var)
        let y = 10;
        console.log(y); // Outputs: 10
        }

        exampleLet();

- `const`
        Scope: const is block-scoped like let.
        Re-assignment: You cannot re-assign or re-declare a const variable. It must be assigned a value at the time of declaration.
        Hoisting: Similar to let, const is hoisted but not initialized, so using it before declaration throws a ReferenceError.

        function exampleConst() {
        const z = 10;
        // z = 20; // Error: Assignment to constant variable.
        console.log(z); // Outputs: 10
        }

        exampleConst();

## String Concatenation vs Template Strings (Template Literals)
In JavaScript, you can combine strings in two ways: using template strings (also called template literals) or string concatenation.

- **String Concatenation:**
    - This is the traditional way of combining strings using the `+` operator. You manually concatenate (join) each string and variable.

    - Concatenation can become cumbersome when dealing with multiple strings or multiline text, as you need to manage the + operator carefully.

    let name = "Alice";
    let age = 25;

    // String concatenation
    let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";
    console.log(greeting); 
    // Output: Hello, my name is Alice and I am 25 years old.


- **Template Strings:** 
    - Template strings (introduced in ES6) use backticks (`) instead of quotes and allow embedded expressions with ${}. They are more readable and flexible, especially for combining variables and writing multi-line strings.

    - In template strings, you do not need to manually concatenate variables and text with +. Instead, you place the variable or expression inside ${} within the backticks.

    let name = "Alice";
    let age = 25;

    // Template string
    let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(greeting);
    // Output: Hello, my name is Alice and I am 25 years old.


## Parameters
In JavaScript, regular parameters and default parameters are both ways of passing values to functions, but they differ in behavior when the function is called without passing an argument.

-  **Regular Parameters:**
    - Regular parameters are the usual parameters passed to a function.
    - If no argument is provided for a regular parameter, its value is undefined by default.
    - If you call greet() without passing a value, name will be undefined.

    function greet(name) {
    console.log("Hello, " + name);
    }

    greet("Alice"); // Outputs: Hello, Alice
    greet();        // Outputs: Hello, undefined

- **Default Parameters:**
    - Default parameters allow you to specify a default value for a parameter if no argument is provided or if the argument is undefined.
    - This prevents the need to manually check for undefined inside the function.
    - Here, name has a default value of "Guest". If no argument is passed to greet(), it will use "Guest" as the value.
    function greet(name = "Guest") {
    console.log("Hello, " + name);
    }

    greet("Alice"); // Outputs: Hello, Alice
    greet();        // Outputs: Hello, Guest

## Function Declarations and Expressions vs Arrow Functions
In JavaScript, regular functions and arrow functions are two ways to define functions, but they differ significantly in terms of syntax and behavior, especially regarding this, arguments, and function hoisting.

- **Regular Functions (Function Declarations and Expressions)**
    - Regular functions can be defined using either a function declaration or a function expression. They have their own this context, and their behavior is more traditional in terms of how functions work.

    - Example: Function Declaration

    function regularFunction() {
    console.log("This is a regular function.");
    }

    regularFunction();  // Outputs: This is a regular function.

    - Example: Function Expression

    const regularFunction = function() {
    console.log("This is a regular function.");
    };

    regularFunction();  // Outputs: This is a regular function.

- **Arrow Functions** 

    - Arrow functions, introduced in ES6, have a more concise syntax and behave differently from regular functions in a few key ways:

        - No own this: Arrow functions don’t have their own `this` context; they inherit this from the surrounding (lexical) scope.
        - No arguments object: Arrow functions don’t have access to the arguments object (though you can use rest parameters instead).
        - Cannot be used as constructors: Arrow functions cannot be used with new, meaning they can’t be used as constructors.
        - No super or new.target: In classes, arrow functions don’t have access to `supe`r or `new.target`.

        const arrowFunction = () => {
        console.log("This is an arrow function.");
        };

        arrowFunction();  // Outputs: This is an arrow function.
- `this` keyword refers to enclosing content e.g. `{}`

## Array Destructuring
In JavaScript, array destructuring is a syntax that allows 
you to unpack values from arrays (or even objects) into 
distinct variables. Its a convenient and readable way to 
values from arrays without having to use traditional indexing.

const array = [1, 2, 3];

// Destructuring assignment
const [a, b, c] = array;

console.log(a); // Outputs: 1
console.log(b); // Outputs: 2
console.log(c); // Outputs: 3

## spread (...) and Rest (...)
In JavaScript, the spread (...) and rest (...) operators share the 
same syntax (three dots), but they are used in different contexts 
and serve different purposes. 

- **Spread Operator (...):** 
    - The spread operator is used to expand an iterable (like an array,
    string, or object) into individual elements. It allows you to spread 
    out elements of an array or properties of an object.
    Use Cases for Spread Operator:

    - You can use the spread operator to expand the 
    elements of an array into individual elements.

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const combinedArray = [...arr1, ...arr2];  // Combines two arrays
    console.log(combinedArray);  // Outputs: [1, 2, 3, 4, 5, 6]

- **Rest Operator (...):** 
    - The rest operator is used to collect multiple elements
     into a single array or object. It essentially gathers the "rest" of
      the values into a new array or object.

        const [first, second, ...rest] = [1, 2, 3, 4, 5];
        console.log(first);  // Outputs: 1
        console.log(second); // Outputs: 2
        console.log(rest);   // Outputs: [3, 4, 5]

## Function vs Classes
In JavaScript, both functions and classes are used to create objects and define reusable pieces of code. While they can often be used for similar purposes, they have distinct syntaxes and behavior. Here’s a comparison between functions and classes in JavaScript, with examples.

- **Function**
Functions in JavaScript are versatile and can be used to encapsulate logic, return values, or even create objects (using constructor functions).

a) Function Declaration (Basic Function)

Functions are used to define reusable blocks of code that can be called with arguments and return results.

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // Outputs: Hello, Alice!

b) Constructor Function

Before ES6 introduced classes, constructor functions were the primary way to create objects with similar properties and methods.

Example of a constructor function:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet();  // Outputs: Hello, my name is Alice and I am 30 years old.

    this refers to the object being created.
    The new keyword is used to create new instances of Person.

c) Function Expressions

Functions can also be stored in variables and passed around as first-class citizens.

const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob"));  // Outputs: Hello, Bob!

- **Class (Introduced in ES6)**

Classes are syntactical sugar over JavaScript’s prototype-based inheritance. They make it easier to create and manage objects that share similar properties and methods.

a) Class Declaration

A class defines a blueprint for creating objects with properties and methods. The syntax is more structured and resembles classes in other object-oriented languages like Java or Python.

Example of a class:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const alice = new Person("Alice", 30);
alice.greet();  // Outputs: Hello, my name is Alice and I am 30 years old.

b) Class Methods

In a class, methods are defined without using the function keyword. These methods will be added to the prototype of the class, and all instances of the class will share them.

Example:

class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));      // Outputs: 5
console.log(calc.multiply(2, 3)); // Outputs: 6

c) Inheritance with Classes

Classes can use inheritance with the extends keyword. A subclass inherits properties and methods from a parent class.

- Example of inheritance:

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();  // Outputs: Rex barks.