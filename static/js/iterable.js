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

console.log("-------------------------------------------------------------");

// 2. for...of 문
// for...of 문은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다.
// for (변수선언문 of 이터러블) { ... }
// for (변수선언문 in 객체) { ... }와 형식이 매우 유사하다.

for (const item of [1, 2, 3]) {
  console.log(item);
}

// for...of 문의 내부 동작을 for 문으로 표현
// 이터러블
const iterable2 = [1, 2, 3];

// 이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성한다.
const iterator2 = iterable2[Symbol.iterator]();

for (;;) {
  // 이터레이터의 next 메서드를 호출하여 이터러블을 순회한다.
  // 이때 next 메서드는 이터레이터 리절트 객체를 반환한다.
  const res = iterator2.next();

  // next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
  if (res.done) break;

  // 이터레이터 리절트 객체의 value 프로퍼티 값을 item 변수에 할당한다.
  const item = res.value;
  console.log(item);
}

console.log("-------------------------------------------------------------");

// 3. 이터러블과 유사 배열 객체
// 유사 배열 객체
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
// 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다.
for (let i = 0; i < arrayLike.length; i++) {
  // 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
  console.log(arrayLike[i]);
}

// 유사 배열 객체는 이터러블이 아니기 때문에 for...of 문으로 순회할 수 없다.
// for (const item of arrayLike) {
//   console.log(item);
// }
// TypeError: arrayLike is not iterable

// Array.form은 유사 배열 객체 도는 이터러블을 배열로 변환한다.
const arr = Array.from(arrayLike);
console.log(arr);
for (const item of arr) {
  console.log(item);
}

console.log("-------------------------------------------------------------");

// 4. 사용자 정의 이터러블

// 1) 사용자 정의 이터러블 구현
// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
  // Smybol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10; // 수열의 최대값

    // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
    // next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        // 이터레이터 리절트 객체를 반환한다.
        return { value: cur, done: cur >= max };
      },
    };
  },
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다.
for (const num of fibonacci) {
  console.log(num);
}

// 이터러블은 스프레드 문법의 대상이 될 수 있다.
const arr2 = [...fibonacci];
console.log(arr2);

// 이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [first, second, ...rest2] = fibonacci;
console.log(first, second, rest2);

console.log("-------------------------------------------------------------");

// 2) 이터러블을 생성하는 함수
// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
// 수열의 최대값을 인수로 전달받는다.
const fibonacci2 = function (max) {
  let [pre, cur] = [0, 1];

  // Symbol.iterator 메서드를 구현한 이터러블을 반환한다.
  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};
// 이터러블을 반환하는 함수에 수열의 최대값을 인수로 전달하면서 호출한다.
// fibonacci2(10)은 이터러블을 반환한다.
const arr3 = [...fibonacci2(20)];
console.log(arr3);

for (const num of fibonacci2(19)) {
  console.log(num);
}

console.log("-------------------------------------------------------------");

// 3) 이터러블이면서 이터레이터인 객체를 생성하는 함수

// fibonacci2 함수는 이터러블을 반환한다.
const iterable3 = fibonacci2(20);
// 이터러블의 함수는 Symbol.iterator 메서드 이터레이터를 반환한다.
const iterator3 = iterable3[Symbol.iterator]();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

// 이터러블이면서 이터레이터인 객체
// 이터레이터를 반환하는 Symbol.iterator 메서드와 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.

// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacci3 = function (max) {
  let [pre, cur] = [0, 1];

  // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
  return {
    [Symbol.iterator]() {
      return this;
    },
    //next 메서드는 이터레이터 리절트 객체를 반환
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
};

// iter는 이터러블이면서 이터레이터다.
let iter = fibonacci3(10);

// iter는 이터러블이므로 for...of 문으로 순회할 수 있다.
for (const num of iter) {
  console.log(num);
}

iter = fibonacci3(10);

// iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
console.log(iter.next());
console.log(iter.next());

console.log("-------------------------------------------------------------");

// 4) 무한 이터러블과 지연 평가
// 무한 이터러블을 생성하는 함수
const fibonacci4 = function () {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      // 무한을 구현해야 하므로 done 프로퍼티를 생략한다.
      return { value: cur };
    },
  };
};
// fibonacci4 함수는 무한 이터러블을 생성한다.
for (const num of fibonacci4()) {
  if (num > 10000) break;
  console.log(num);
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
const [f1, f2, f3] = fibonacci4();
console.log(f1, f2, f3);
