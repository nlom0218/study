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

console.log("------------------------------------");

// 4. 패턴
// 1) 문자열 검색
const target4 = "Is this all there is?";

// "is" 문자열과 매치하는 패턴, 플래그가 생략되었으므로 대소문자를 구별한다.
const regExp4 = /is/;
// target과 정규 표현식이 매치하는지 테스트한다.
console.log(regExp4.test(target4));
// target과 정규 표현식의 매칭 결과를 구한다.
console.log(regExp4.exec(target4));
console.log(target4.match(regExp4));

// "is" 문자열과 매치하는 패턴, 플래그 i를 추가하면 대소문자를 구별하지 않는다.
const regExp4_2 = /is/i;
console.log(target4.match(regExp4_2));

// "is" 문자열과 매치하는 패턴,
// 플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
const regExp4_3 = /is/gi;
console.log(target4.match(regExp4_3));

console.log("------------------------------------");

// 2) 임의의 문자열 검색
const target5 = "Is this all there is?";
// .은 임의의 문자 한 개를 의미. 문자의 내용은 무엇이든 상관없다.
// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp5 = /.../g;
console.log(target5.match(regExp5));

console.log("------------------------------------");

// 3) 반복 검색
const target6 = "A AA B BB Aa Bb AAA";

// "A"가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp6_1 = /A{1,2}/g;
console.log(target6.match(regExp6_1));

// "A"가 2번 반복되는 문자열을 전역 검색한다.
const regExp6_2 = /A{2}/g;
console.log(target6.match(regExp6_2));

// "A"가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp6_3 = /A{2,}/g;
console.log(target6.match(regExp6_3));

// "A"가 최소 한 번 이상 반복되는 문자열 ("A", "AA", "AAA", ...)을 전역 검색한다.
const regExp6_4 = /A+/g;
console.log(target6.match(regExp6_4));

const target7 = "color colour colourr clou";
// "colo" 다음 "u"가 최소 0번, 최대 1번 반복되고 "r"이 이어지는
// 문자열 "color", "colour"를 전역 검색한다.
const regExp7 = /colou?r/g;
console.log(target7.match(regExp7));

console.log("------------------------------------");

// 4) OR 검색
const target8 = "A AA B BB Aa Bb";

// "A" 또는 "B"를 전역 검색한다.
const regExp8_1 = /A|B/g;
console.log(target8.match(regExp8_1));
const regExp8 = /[AB]/g;
console.log(target8.match(regExp8));

// "A" 또는 "B"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp8_2 = /A+|B+/g;
console.log(target8.match(regExp8_2));
const regExp8_3 = /[AB]+/g;
console.log(target8.match(regExp8_3));

console.log("------------------------------------");

const target9 = "A AA BB ZZ Aa Bb ABACD";
// "A" ~ "Z" 가 한 번 이상 반복 되는 문자열을 전역 검색한다.
// "A", "AA", "AAA", ... 또는 "B", "BB", "BBB", ... ~ 또는 "Z", "ZZ", "ZZZ", ...
const regExp9 = /[A-Z]+/g;
console.log(target9.match(regExp9));

console.log("------------------------------------");

const target10 = "AA BB Aa Bb FF Ff ff 12";
// "A" ~ "Z" 또는 "a" ~ "z" 가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp10 = /[A-Za-z]+/g;
console.log(target10.match(regExp10));

console.log("------------------------------------");

const target11 = "AA BB 12,345,78922789 1255992";
// "0" ~ "9"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp11 = /[0-9]+/g;
console.log(target11.match(regExp11));

const regExp11_2 = /[0-9,]+/g;
console.log(target11.match(regExp11_2));
// const regExp11_3 = /[0-9,]/g;
// console.log(target11.match(regExp11_3));

console.log("------------------------------------");

const regExp11_4 = /[\d,]+/g;
console.log(target11.match(regExp11_4));

console.log("------------------------------------");

const regExp11_5 = /[\D,]+/g;
console.log(target11.match(regExp11_5));

console.log("------------------------------------");

const target12 = "Aa Bb 12,345 _$%^";
// 알파벳, 숫자, 언더스코어, ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp12_1 = /[\w,]+/g;
console.log(target12.match(regExp12_1));

// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp12_2 = /[\W,]+/g;
console.log(target12.match(regExp12_2));

console.log("------------------------------------");

// 5) NOT 검색
const target13 = "AA BB 12 Aa Bb";

// 숫자를 제외한 문자열을 전역 검색한다.
const regExp13 = /[^0-9]+/g;
console.log(target13.match(regExp13));

console.log("------------------------------------");

// 6) 시작 위치로 검색
const target14 = "https://poiem.com";
const target14_1 = "poiem.com";

// 'http'로 시작하는지 검사한다.
const regExp14 = /^http/;
console.log(regExp14.test(target14));
console.log(regExp14.test(target14_1));

console.log("------------------------------------");

// 7) 마지막 위치로 검색
// 'com'으로 끝나는지 검사한다.
const regExp14_1 = /com$/;
console.log(regExp14_1.test(target14));
console.log(regExp14_1.test(target14_1));

console.log("------------------------------------");

// 5. 자주 사용하는 정규표현식
// 1) 특정 단어로 시작하는 검사 & 특정 단어로 끝나는지 검사
const target15 = "https://example.com";
const regExp15 = /^https?:\/\//; // "hppt://" 또는 "https://"로 시작하는지 검사한다.
const regExp15_1 = /com$/; // "com"으로 끝나는지 검사한다.
console.log(regExp15.test(target15));
console.log(regExp15_1.test(target15));

console.log("------------------------------------");

// 2) 숫자로만 이루어진 문자열인지 검사
const target16 = "12345";
const regExp16 = /^\d+$/;
console.log(regExp16.test(target16));

console.log("------------------------------------");

// 3) 하나 이상의 공백으로 시작하는지 검사
const target17 = "Hi!";
const regExp17 = /^\s+/;
console.log(regExp17.test(target17));

console.log("------------------------------------");

// 4) 아이디로 사용 가능한지 검사
const target18 = "asdfe123";
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.
const regExp18 = /^[A-Za-z0-9]{4,10}$/;
console.log(regExp18.test(target18));

console.log("------------------------------------");

// 5) 메일 주소 형식에 맞는지 검사
const target19 = "nlom0218@naver.com";
const regExp19 = /^[A-Za-z0-9]([-_\.]?[0-9A-Za-z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
console.log(regExp19.test(target19));

console.log("------------------------------------");

// 6) 핸드폰 번호 형식에 맞는지 검사
const target20 = "010-1234-5566";
const regExp20 = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(regExp20.test(target20));

console.log("------------------------------------");

// 7) 특수 문자 포함 여부 검사
const target21 = "abc#123";
const regExp21 = /[^a-zA-Z0-9]/gi;
console.log(regExp21.test(target21));
console.log(target21.match(regExp21));

// 특수 문자를 제거할 때는 String.prototype.replace 메서드를 사용한다.
console.log(target21.replace(regExp21, ""));
