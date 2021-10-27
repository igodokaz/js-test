// class 설명을 위한 사전내용

// const heropy = {
//   firstName: "Heropy",
//   lastName: "Park",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(heropy.getFullName());

// const amy = {
//   firstName: "Amy",
//   lastName: "Clarke",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(amy.getFullName());

// const neo = {
//   firstName: "Neo",
//   lastName: "Smith",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(neo.getFullName());

// class 설명

function User(first, last) {
  // 파스칼 케이스? U를 대문자로
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const heropy = new User("Heropy", "Part"); // 생성자함수
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");

console.log(heropy.getFullName());
console.log(amy.getFullName());
console.log(neo);
