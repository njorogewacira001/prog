// Basic types
let name: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

// Array type
let hobbies: string[] = ["Reading", "Coding", "Music"];

// Object type
type User = {
  name: string;
  age: number;
  hobbies: string[];
};

// Function type
type AddNumbers = (a: number, b: number) => number;

class
 
Person
 
{
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
  }
}

let john = new Person("John Doe", 25);
john.greet();

// classes

class
 
Person
 
{
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
  }
}

let john = new Person("John Doe", 25);
john.greet();


// functions 
function addNumbers(a: number, b: number): number {
  return a + b;
}

let sum = addNumbers(5, 10);
console.log(`The sum is: ${sum}`);

// Function with default parameter
function printName(name: string = "John Doe"): void {
  console.log(`Hello, ${name}!`);
}

printName("Jane"); // Prints: Hello, Jane!
printName();