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

// function User(first, last) {
//   // 파스칼 케이스? U를 대문자로, 구조를 알아보기 쉬운 개발자들의 약속
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const heropy = new User("Heropy", "Part"); // new, 생성자함수,
// const amy = new User("Amy", "Clarke");
// const neo = new User("Neo", "Smith");

// console.log(heropy.getFullName());
// console.log(amy.getFullName());
// console.log(neo);

// this
// 일반(Normal) 함수는 '호출 위치'에서 따라 this 정의 !
// 화살표(Arrow) 함수는 자신이 선언된 '함수 범위'에서 this 정의!

// const heropy = {
//   name: "Heropy",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   },
// };
// heropy.normal();
// heropy.arrow(); // undefined

// const amy = {
//   name: "Amy",
//   normal: heropy.normal, // heropy의 normal을 호출, 그것을 다시 amy의 normal로 호출
//   arrow: heropy.arrow,
// };
// amy.normal();
// amy.arrow();

// function User(name) {
//   // 파스칼 케이스, 생성자 함수 유추
//   this.name = name;
// }
// User.prototype.normal = function () {
//   console.log(this.name);
// };
// User.prototype.arrow = () => {
//   console.log(this.name);
// };

// const heropy = new User("Heropy");

// heropy.normal(); // Heropy가 곧 this
// heropy.arrow(); // 함수 전체범위에서 this가 특정되지 않음

// const timer = {
//   name: "Heropy!!", // 속성
//   timeout: function () {
//     // setTimeout(function () { // 일반함수이기 때문에 setTimeout이 어딘가에서 실행된다
//     setTimeout(() => { // timeout 함수범위에 있기 때문에, 그곳에서 this가 정의됨
//       console.log(this.name);
//     }, 2000);
//   },
// };
// timer.timeout();

// ES6 Classes

// const heropy = {
//   name: "Heropy",
//   // normal: function () {
//   normal() { // 생략 가능
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   },
// };

// heropy.normal();
// heropy.arrow();

// ES6 class 도입전
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// ES6 Class 도입

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const heropy = new User("Heropy", "Park");
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");

console.log(heropy);
console.log(amy.getFullName());
console.log(neo.getFullName());
