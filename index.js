// 34장 이터러블

// 1. 이터레이션 프로토콜
// 1) 이터러블
const array = [1, 2, 3];
// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속박은 이터러블이다.
console.log(Symbol.iterator in array);

// 이터러블인 배열은 for...of 문으로 순회 가능하다.
for (const item of array) {
  console.log(item);
}

// 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
console.log([...array]);

// 이터러블인 배열은 배열 디스트릭처링 할당의 대상으로 사용할 수 있다.
const [a, ...rest] = array;
console.log(a, rest);

// 일반 객체는 이터러블이 아니다.
const obj = { a: 1, b: 2 };
console.log(Symbol.iterator in obj);
// for (const item of obj) {
//   console.log(item);
// }
// 스프레드 프로퍼티 제안(Stage 4)은 객체 리터널 내부에서 스프레드 문법의 사용을 허용한다.
console.log({ ...obj });

console.log("-------------------------------------------------------------");

// 2) 이터레이터
// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array2 = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = array2[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
console.log("next" in iterator);

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 리터레이터 리절트 객체를 반환한다.
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// value 프로퍼티는 현재 순회 중인 이터러블의 값을 나타내며 done 프로퍼티는 이터러블의 순회 완료 여부를 나타낸다.
