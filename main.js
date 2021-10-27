// 함수 복습

// function sum(x, y) {
//   console.log(x + y);
// }

// sum(1, 3);
// sum(4, 12);

// 기명함수
// function sum(x, y) {
//   return x + y;
// }

// const a = sum(1, 3);
// const b = sum(4, 12);

// console.log(a);
// console.log(a + b);
// console.log(sum(1, 3)); //단일로 사용될 때 좋음
// console.log(sum(1, 3) + b); //비효율적

// // 익명함수
// function sum(x, y) {
//   return x + y; // 함수가 종료됨을 의미, 밑의 내용은 실행안됨
//   console.log(x);
// }

// sum(1, 3);

// function sum(x, y) {
//   if (x < 2) {
//     return; // undefined, 값이 정해지지 않고 종료
//     return 123; // 출력 x
//   }
//   return x + y;
// }
// console.log(sum(1, 3));

// function sum() {
//   console.log(arguments);
//   return arguments[0] + arguments[1]; // 인수가 많은 경우 활용, 일괄적 활용, 많이 사용 안됨
// }

// console.log(sum(7, 3));

// 화살표 함수
// () => {} vs function () {}

// const double = function (x) {
//   return x * 2;
// };
// console.log("double: ", double(7));

// const doubleArrow = (x) => {
//   return x * 2;
// };
// console.log("doubleArrow", doubleArrow(7));

// const doubleArrow = (x) => null;
// console.log("doubleArrow: ", doubleArrow(7));

// const doubleArrow = (x) => ({ name: "Heropy" }); // 문자, 숫자, true/f, null, undefined, []배열데이터도 됨
// console.log("doubleArrow", doubleArrow(7));

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7;
// function double() {
//   console.log(a * 2);
// }
// double();

// (function () {
//   console.log(a * 2);
// })(); // ()) 도 가능, prettier가 자동 변환

// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 실행불가
// const a = 7;
// double();

// const double = function () {
//   console.log(a * 2);
// };

//실행 가능
// const a = 7;
// double();

// function double() {
//   console.log(a * 2);
// }

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function () {
//   console.log("heropy!");
// }, 3000); //3초 (ms)

// const timer = setTimeout(() => {
//   console.log("Heropy!");
// }, 3000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearTimeout(timer);
// });

// const timer = setInterval(() => {
//   console.log("Heropy!");
// }, 3000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearInterval(timer);
// });

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log("Heropy!");
    cb();
  }, 3000);
}
timeout(() => {
  console.log("Done!");
});
