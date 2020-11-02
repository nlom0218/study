// 31장 RegExp
// 1. RegExp의 생성
const target1 = "Is this all there is?";
// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp1 = /is/;
// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환
console.log(regexp1.test(target1));

console.log("------------------------------------");

// 2. RegExp 메서드
// 1) RegExp.prototype.exec
console.log(regexp1.exec(target1));

console.log("------------------------------------");

// 2) RegExp.prototype.test
console.log(regexp1.test(target1));

console.log("------------------------------------");

// 3) String.prototype.match
console.log(target1.match(regexp1));

const target2 = "Is this all there is?";
const regExp2 = /is/g;
console.log(target2.match(regExp2));

console.log("------------------------------------");

// 3. 플러그
const target3 = "Is this all there is?";

// target3 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
console.log(target3.match(/is/));

// target3 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
console.log(target3.match(/is/i));

// target3 문자열에서 is 문자열을 대소문자를 구별하여 전역을 검색한다.
console.log(target3.match(/is/g));

// target3 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
console.log(target3.match(/is/gi));
