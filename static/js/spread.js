// 35장 스프레드 문법

// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다.(-> 1, 2, 3)
console.log(...[1, 2, 3]);

// 문자열은 이터러블이다.
console.log(..."Hello");

// Map과 Set은 이터러블이다.
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
);
console.log(...new Set([1, 2, 3]));

// 이터러블이 아니니 일반 객체는 스프레드 문법의 대상이 될 수 없다.
// console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator

console.log("-------------------------------------------------------");

// 1.함수 호출문의 인수 목록에서 사용하는 경우

const arr = [1, 2, 3];
// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
console.log(Math.max(arr)); // NaN

// apply 함수의 2번째 인수(배열)는 apply 함수가 호출하는 함수의 인수 목록이다.
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
console.log(Math.max.apply(null, arr)); // 3

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달한다.
console.log(Math.max(...arr)); // 3

// Rest 파라미터와 혼동하지 않기
// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest);
}
foo(...[1, 2, 3]);

console.log("-------------------------------------------------------");

// 2. 배열 리터럴 내부에서 사용하는 경우
const arrChild1 = [1, 2];
const arrChild2 = [3, 4];
// 1) concat
// 2개의 배열을 1개의 배열로 결합하고 싶은 경우
// ES5
const arr2 = arrChild1.concat(arrChild2);
console.log(arr2);

// ES6
const arr3 = [...arrChild1, ...arrChild2];
console.log(arr3);

console.log("-------------------------------------------------------");

// 2) splice
// 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하는 경우

// ES5
// 세 번재 인수 arrChild2를 해체하여 전달해야 한다.
// 그렇지 않으면 arrChild1에 arrChild2 배열 자체가 추가된다.
arrChild1.splice(1, 0, arrChild2);
console.log(arrChild1);
// [1, [3, 4], 2]

// ES6
const arr4 = [1, 2];
const arr5 = [3, 4];
arr4.splice(1, 0, ...arr5);
console.log(arr4);

console.log("-------------------------------------------------------");

// 3) 배열 복사
// ES5
var origin1 = [1, 2];
var copy1 = origin1.slice();
console.log(copy1);
console.log(copy1 === origin1);

// ES6
const origin2 = [1, 2];
const copy2 = [...origin2];
console.log(copy2);
console.log(copy2 === origin2);

// 이때 원본 배열의 각 요소를 얕은 복사하여 새로운 복사본을 생성, 이는 splice메서드도 마찬가지

console.log("-------------------------------------------------------");

// 4) 이터러블을 배열로 변환
// ES5
function sum1() {
  // 이터러블이면서 유사배열 객체인 arguments를 배열로 변환
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum1(1, 2, 3));

// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
const arr6 = Array.prototype.slice.call(arrayLike);
console.log(arr6);
console.log(Array.isArray(arr6));

// ES6
function sum2() {
  // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sum2(1, 2, 3, 4));

// Rest 파라미터 args는 함수에 전달에 전달된 인수들의 목록을 배열로 전달받는다.
const sum3 = (...rest) => rest.reduce((pre, cur) => pre + cur, 0);
console.log(sum3(1, 2, 3, 4, 5));

// 단, 이터러블이 아닌 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다.
//const arr7 = [...arrayLike];
// TypeError: arrayLike is not iteralbe

// Array.from은 유사 배열 객체 또는 이터러블을 배열로 변환한다.
console.log(Array.from(arrayLike));

console.log("-------------------------------------------------------");

// 3. 객체 리터럴 내부에서 사용하는 경우
// 스프레드 프로퍼티
// 객체 복사
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy);
console.log(copy === obj);

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

// Object.assign(스프레드 프로퍼티가 제안되기 이전)
// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged1 = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged1);
// 특정 프로퍼티 변경
const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed);
// 프로퍼티 추가
const add = Object.assign({}, { x: 1, y: 2 }, { z: 3 });
console.log(add);

// 스프레드 프로퍼티는 Object.assign 메서드를 대체할 수 있는 간편한 문법이다.
const merged3 = { x: 1, y: 2, ...{ y: 10, z: 3 } };
console.log(merged3);

const changed2 = { x: 1, y: 2, ...{ y: 100 } };
console.log(changed2);

const add2 = { x: 1, y: 2, ...{ z: 3 } };
console.log(add2);
