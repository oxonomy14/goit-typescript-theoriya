import "./style.css";

//Example 1

let isDone: boolean = false;

const name: string = "Bob";
const LastName: string = "Semenenko";

let age: number = 34;

const isHappy: boolean = true;

// описали 5 базових типів даних

const budget: null = null;

const status: undefined = undefined;

// Зробили типізацію

age = 12;

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

//!складні типи - масиви та обєкти

//! type - щоб описати обєкт

//описали структуру обєктів в TS

//Example 2

type userProfile = {
  userName: string;
  age: number;
  isActive: boolean;
};

const user = {
  userName: "Bob",
  age: 34,
  isActive: true,
};

function displayUserProfile(user: userProfile) {
  //зробили типізацію оюєкта та типізацію функції
  return `User name is ${user.userName} his is ${user.age} years old and his is ${user.isActive}`;
}

console.log(displayUserProfile(user));

//Example 3

function logName(name: string) {
  return `${name}`;
}

//Example 4 - Масиви
// треба типизувати масив

type User = {
  name: string;
  age: number;
};

//function calcTotal(arr: number[])
//function calcTotal(arr: object[]) // найгірший варіант
//function calcTotal(arr: { name: string; age: number; }[]) // не зручна в читанні і використанні
function calcTotal(arr: User[]) {
  // самий оптимальний варіант
  return arr.reduce((acc, el) => acc + el, 0);
}

const numberArray = [10, 20, 30, 40];
//console.log(calcTotal(numberArray));

const users = [
  { name: "bob", age: 12 },
  { name: "bob", age: 24 },
  { name: "bob", age: 36 },
];

console.log(calcTotal(users));

//! Спецефічні типи

//! unknown

//### Task 5 Using the unknown Type in TypeScript

//Write a TypeScript function named safelyParseJson that attempts to parse a JSON string and return the result. The function should use the unknown type to handle the parsed data safely, verifying the type of the parsed object before returning it. If the object is not of the expected type, the function should return null.

function safelyParseJson(jsonString: string): unknown {
  try {
    const result: unknown = JSON.parse(jsonString);
    if (typeof result === "object" && result !== null) {
      return result; // Type is verified as an object (non-null)
    }
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }
  return null; // Return null if parsing fails or type is incorrect
}

// Example usage:
const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson)); // Output: { name: 'John', age: 30 }

const incorrectJson = "this is not a json";
console.log(safelyParseJson(incorrectJson)); // Output: null

//! any - будь-що || можемо ставити щоб побачити що код працює, пізніше визначитись з типізацією

//### Task 4 Using the any Type in TypeScript

//Create a TypeScript function named logDetails that takes a single parameter. The function should accept any type of value and simply print this value along with its type to the console. Demonstrate how the function can be used with different types of inputs.

function logDetails(value: any): void {
  console.log(`Value: ${value}, Type of value: ${typeof value}`);
}

// Example usage:
logDetails("Hello, TypeScript!"); // Output: Value: Hello, TypeScript!, Type of value: string
logDetails(42); // Output: Value: 42, Type of value: number
logDetails(true); // Output: Value: true, Type of value: boolean

//! enum - словник конкретних даних | сталий список, значення пунктів, меню. Користуватись конкретним набором значень.

enum VehicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}

function getVehicleType(vehicle: VehicleType): string {
  return `The vehicle type is: ${vehicle}.`;
}

// Example usage:
console.log(getVehicleType(VehicleType.Car)); // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Motorcycle."

//! Union Type одне значення може приймати різні типи. Буває коли використовуємо пропс

function formatInput(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(2); // Formats the number to two decimal places
  } else {
    return input.toUpperCase(); // Converts the string to uppercase
  }
}

// Example usage:
console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"

//!Literal тип змінної набуває певного значення. Задаються жосткі значення.

function lightShower(color: "green" | "red" | "yellow") {
  if (color === "green") {
    console.log("go");
  } else if (color === "yellow") {
    console.log("ready");
  } else if (color === "red") {
    console.log("ready");
  }
}

lightShower("black");

//! Як типізувати значення які функція повертає
//! void

function logName2(name: string): string {
  return `${name}`;
}

//Ця функція нічого не повертає
function logName3(name: string): void {
  console.log(`${name}`);
}

//! never - коли ф-я повертає помилку

function errorHandler(message: string): never {
  throw new Error(message);
}

errorHandler("Critical error occurred!");

//! Interface Інтерфейси, можемо описати обуєкт. !Викор для опису класів (через type не можемо). Викор опціональні ключи

interface User {
  name: string;
  age: number;
  lastName?: string;
  sayHello(): string;
  sayBye(): void;
  showAge(userAge: number): string;
  showAge2(userAge2: number): string;
}

const student: User = {
  name: "Bob",
  age: 24,
  sayHello() {
    return "Hello";
  },
  sayBye() {
    console.log("Bye");
  },
  showAge(userAge: number) {
    return `My age is ${userAge}`;
  },
  showAge2(userAge2) {
    return `My age is ${userAge2}`;
  },
};
