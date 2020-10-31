// 28장 Number
// 1. Number 생성자 함수
let numObj = new Number();
console.log(numObj);
console.log("-----------------------");
numObj = new Number(19);
console.log(numObj);
console.log("-----------------------");
numObj = new Number("12");
console.log(numObj);
console.log("-----------------------");
numObj = new Number("Hello");
console.log(numObj);
console.log("-----------------------");
numObj = new Number(true);
console.log(numObj);
numObj = new Number(false);
console.log(numObj);

console.log("-----------------------");

// 2. Number 프로퍼티
// 1) Number.EPSILON
console.log(Number.EPSILON);

console.log("-----------------------");

// 2) Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE < Infinity);

console.log("-----------------------");

// 3) Number.MIN_VALUE
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE > 0);

console.log("-----------------------");

// 4) Number.MAX_SAFE_INTEGER & Number.MIN_SAFE_INTERGER
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

console.log("-----------------------");

// 5) Number.POSITIVE_INFINITY & Number.NEGATIVE_INFINITY
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

console.log("-----------------------");

// 6) Number.NaN
console.log(Number.NaN);

console.log("-----------------------");

// 3. Number 메서드
// 1) Number.isFinite
// 인수가 정상적인 유한수이면 true를 반환한다.
console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));

// 인수가 무한수이거나 NaN이면 false를 반환한다.
console.log(Number.isFinite(Number.POSITIVE_INFINITY));
console.log(Number.isFinite(Number.NEGATIVE_INFINITY));
console.log(Number.isFinite(Number.NaN));

console.log("-----------------------");

// 2) Number.isInteger
// 인수가 정수이면 true를 반환한다.
console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));

// 0.5는 정수가 아니다.
console.log(Number.isInteger(0.5));
// "123"을 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isInteger("123"));
// false를 숫자로 암묵적 타입 변홚하지 않는다.
console.log(Number.isInteger(false));
// infinity/-infinity는 정수가 아니다.
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

console.log("-----------------------");

// 3) Number.isNaN
// 인수가 NaN이면 true를 반환한다.
console.log(Number.isNaN(NaN));

// Number.isNaN은 인수를 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isNaN(undefined));

// isNaN는 인수를 숫자로 암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
console.log(isNaN(undefined));

console.log("-----------------------");

// 4) Number.isSafeInteger
// 0은 안전한 정수다
console.log(Number.isSafeInteger(0));
// 100000000000000은 안전한 정수다
console.log(Number.isSafeInteger(1000000000000000));
// 1000000000000001은 안전하지 않다.
console.log(Number.isSafeInteger(10000000000000001));
// 0.5는 정수가 아니다.
console.log(Number.isSafeInteger(0.5));
// "123"을 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isSafeInteger("123"));
// false를 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isSafeInteger(false));
// Infinity/ -Infinity는 정수가 아니다.
console.log(Number.isSafeInteger(Infinity));

console.log("-----------------------");

// 5) Number.prototype.toExponential

console.log("-----------------------");

// 6) Number.prototype.toFixed
// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
console.log((12345.6789).toFixed());
// 소수점 이하 1자릿수 유효, 나머지 반올림
console.log((12345.6789).toFixed(1));
// 소수점 이하 2자릿수 유효, 나머지 반올림
console.log((12345.6789).toFixed(2));
// 소수점 이하 3자릿수 유효, 나머지 반올림
console.log((12345.6789).toFixed(3));

console.log("-----------------------");

// 7) Number.prototype.toPrecision
// 전체 자릿수 유효. 인수를 생략하면 기본값 0이 지정된다.
console.log((12345.6789).toPrecision());
// 전체 1자릿수 유효, 나머지 반올림
console.log((12345.6789).toPrecision(1));
// 전체 2자릿수 유효, 나머지 반올림
console.log((12545.6789).toPrecision(2));
// 전체 6자릿수 유효, 나머지 반올림
console.log((12345.6789).toPrecision(6));

console.log("-----------------------");

// 8)Numver.prototype.toString
// 인수를 생략하면 10진수 문자열을 반환한다.
console.log((10).toString());
// 2진수 문자열을 반환한다.
console.log((10).toString(2));
console.log((16).toString(2));
