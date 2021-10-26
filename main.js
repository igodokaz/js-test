// 산술 연산자(arithmetic operator)

// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(7 % 5);

// 할당 연산자(assignment operator)

// const a = 2;

// let a = 2;
// // a = a + 1
// a += 1;

// console.log(a);

// 비교 연산자(comparison operate)

// const a = 1;
// const b = 3;

// console.log(a === b);

// function isEqual(x, y) {
//   return x === y;
// }

// console.log(isEqual(1, 1));
// console.log(isEqual(2, "2"));

// const a = 13;
// const b = 13;

// // console.log(a !== b);
// console.log(a >= b);

// 논리 연산자(logical operator)

// const a = 1 === 1;
// const b = "AB" === "AB";
// const c = false;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log("&&: ", a && b && c); // 그리고, and
// console.log("||:", a || b || c); // 또는, or

// console.log("!:", !a); // 부정, not

// 삼항 연산자(ternary operator)

// const a = 1 < 2;

// if (a) {
//   console.log("참");
// } else {
//   console.log("거짓");
// }

// console.log(a ? "참" : "거짓");

// 조건문 (IF statement) //

import random from "./getRandom.js";

const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    coxnsole.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default:
    console.log("rest...");
}

// if (a === 0) {
//   console.log("a is 0");
// } else if (a === 2) {
//   console.log("a is 2");
// } else if (a === 4) {
//   console.log("a is 4");
// } else {
//   console.log("rest...");
// }
