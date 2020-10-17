// var 키워드로 선언한 변수의 문제점
console.log("변수 선언 키워드 var");
// 1. 변수 중복 선언 허용
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x, y);

// 2. 함수 레벨 스코프
var z = 1;
if (true) {
  var z = 10;
  var k = 11111;
} // z는 전역 변수, z변수는 중복 선언된다.
console.log(z);
console.log(k);

var i = 10;
for (var i = 0; i < 5; i++) {
  // i는 전역 변수, i변수는 중복 선언된다.
  console.log(i);
}
console.log(i); // 5

// 3. 변수 호이스팅

// foo 변수 선언 => 1. 선언단계
// 2. 초기화 단계
console.log(foo);
// 3. 할당 단계
foo = 12;
console.log(foo);
// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행
var foo;
// 가독성이 매우 심히 좋지 않다.

// let 키워드
console.log("변수 선언 키워드 let");
// 1. 변수 중복 선언 금지
var fee = 123;
var fee = 456; // 같은 스코프 내에서 중복 선언 허용
let bar = 123;
// let bar = 567; => 같은 스코프 내에서 중복 선언 불가

// 2. 블록 레벨 스코프
if (true) {
  let bar = 456;
  let baa = 33;
}
console.log(bar);

let ii = 10;
function fooo() {
  let ii = 100;
  for (let ii = 0; ii < 3; ii++) {
    console.log(ii); // 1, 2
  }
  console.log(ii); // 100
}
fooo();
console.log(ii); // 10

// const 키워드
console.log("변수 선언 키워드 const");
// 1. 선언과 초기화
// const foo; => SyntaxError: Missing initializer in const declaration.

// 2. 재할당 금지
const foze = 1;
// foze = 2; => TypeError: Assignment to constant variable.

// 3. 상수
const TAX_RATE = 0.1; // 변경할 수 없는 상수, 대문자로 선언해 상수임을 명확히 나타냄
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
console.log(afterTaxPrice);

// 4. const 키워드와 객체
const person = {
  name: "Lee",
};
person.name = "Kim";
console.log(person.name);
// 새로운 값을 재할당하는 것은 불가능하지만 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능
