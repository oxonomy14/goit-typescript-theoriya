// let user: { name: string; age: number } = {
//   age: 30,
//   name: "Tom",
// };

// let userNameLikeNumber: { name: string; age: number } = {
//   name: "Tom",
//   age: 30,
// };

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Tom",
  age: 30,
};

console.log(userNameLikeNumber);
console.log(user);
