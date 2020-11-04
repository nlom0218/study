// 33장 7번째 데이터 타입 Symbol

// 1. 심벌 값의 생성

// 1) Symbol 함수
// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol();
console.log(typeof mySymbol1);
// 심벌 값은 외부로 노출되지 않아 학인할 수 없다.
console.log(mySymbol1);

// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol2 = Symbol("mySymbol");
const mySymbol3 = Symbol("mySymbol");
console.log(mySymbol2 === mySymbol3);

// 심벌도 래퍼 객체를 생성한다.
console.log(mySymbol2.description);
console.log(mySymbol2.toString());

// 불리언 타입으로는 암묵적으로 타입 변환된다.
console.log(!mySymbol3);
console.log(!!mySymbol2);

console.log("--------------------------------------------------");

// 2) Symbol.for / Symbol.keyFor 메서드
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const mySymbol4 = Symbol.for("mySymbol");
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const mySymbol5 = Symbol.for("mySymbol");
console.log(mySymbol4 === mySymbol5);

// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(mySymbol5));

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
console.log(Symbol.keyFor(mySymbol2));

console.log("--------------------------------------------------");

// 2. 심벌과 상수

// 위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// 이때 값 1, 2, 3, 4에는 특별한 의미가 없고 상수 이름에 의미가 있다.
const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};
// 변수에 상수를 할당
const myDirection = Direction.UP;
if (myDirection === Direction.UP) console.log("You are going to UP.");

// 위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// 중복될 가능성이 없는 심벌 값으로 상수 값을 생성한다.
const Dircetion2 = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};
const myDirection2 = Dircetion2.UP;
if (myDirection2 === Dircetion2.UP) console.log("You are going to UP.");

console.log("--------------------------------------------------");

// 3. 심벌과 프로퍼티 키
const obj = {
  // 심벌 값으로 프로퍼티 키를 생성
  [Symbol.for("mySymbol")]: 1,
};
console.log(obj[Symbol.for("mySymbol")]);

console.log("--------------------------------------------------");

// 4. 심벌과 프로퍼티 은닉
const obj2 = {
  name: "Kim",
  // 심벌 값으로 프로퍼티 키를 생성
  [Symbol.for("mySymbol")]: 1,
};
for (const key in obj2) {
  console.log(key);
}
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));

// getOwnPropertySymbols 메서드는 인수로 전달한 객체의 심벌 프로퍼티 키를 배열로 반환한다.
console.log(Object.getOwnPropertySymbols(obj2));

// 심벌 값도 찾을 수 있다.
const symbolKey1 = Object.getOwnPropertySymbols(obj2)[0];
console.log(obj2[symbolKey1]);

console.log("--------------------------------------------------");

// 5) 심벌과 표준 빌트인 객체 확장
// 표준 빌트인 객체를 확장하는 것은 권장하지 않는다.
Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
console.log([1, 2, 3].sum());

// 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다.
Array.prototype[Symbol.for("sum")] = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
console.log([4, 5, 6][Symbol.for("sum")]());

console.log("--------------------------------------------------");

// 6) Well-Known Symbol
