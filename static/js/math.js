// 29장 Math
// 1. Math 프로퍼티

console.log(Math.PI);

console.log("--------------------------------------");

// 2. Math 메서드
// 1) Math.abs
console.log(Math.abs(124));
console.log(Math.abs(-123));
console.log(Math.abs(12.22));

console.log("--------------------------------------");

// 2) Math.round
// 소수점 이하를 반올림한 정수를 반환
console.log(Math.round(12.5));
console.log(Math.round(12.3));
console.log(Math.round(-12.6));
console.log(Math.round(-12.5));

console.log("--------------------------------------");

// 3) Math.ceil
// 소수점 이하를 올림한 정수를 반환
console.log(Math.ceil(1.2));
console.log(Math.ceil(-4.1));

console.log("--------------------------------------");

// 4) Math.floor
// 숫자의 소수점 이하를 내림한 정수를 반환
console.log(Math.floor(1.2));
console.log(Math.floor(-1.4));

console.log("--------------------------------------");

// 5) Math.sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(5));

console.log("--------------------------------------");

// 6) Math.random
// 랜덤 숫자를 반환. 0에서 1미만의 실수. 0은 포함되지만 1은 포함되지 않는다.

// 1에서 10 범위의 랜덤 정수 취득
// Math.random으로 0에서 1미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의 랜덤 실수를 구한다.
// 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구한다.
// Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 때어 버린 다음 정수를 반환한다.
const random = Math.floor(Math.random() * 10 + 1);
console.log(random);

console.log("--------------------------------------");

// 7) Math.pow
// 첫 번째 인수를 밑으로, 두 번째 인수를 지수로 거듭제곱한 결과를 반환한다.
console.log(Math.pow(2, 5));
// ES7에 도입된 지수 연산자
console.log(2 ** 5);
console.log(2 ** (2 ** 2));

console.log("--------------------------------------");

// 8) Math.max
// 전달받은 인수 중에서 가장 큰 수를 반환한다.
console.log(Math.max(1, 2, 3, 4));

// 배열 요소 중에서 최대값 취득
console.log(Math.max.apply(null, [1, 2, 3]));
// ES6 스프레드 문법
console.log(Math.max(...[1, 2, 3]));

console.log("--------------------------------------");

// 9) Math.min
// 전달받은 인수 중에서 가장 작은 수를 반환한다.
console.log(Math.min(2, 4, 5, 6, 7));
