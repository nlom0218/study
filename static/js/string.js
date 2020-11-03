// String
// 1. String 생성자 함수
const strObj1 = new String();
console.log(strObj1);

const strObj2 = new String("Lee");
console.log(strObj2);

// 배열과 유사하게 인덱스를 사용하여 각 문자에 접근할 수 있다.
console.log(strObj2[0]);
// 단, 문자열은 원시 값이므로 변경할 수 없다.
strObj2[0] = "K";
console.log(strObj2[0]);

// 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환한다.
const strObj3 = new String(123);
console.log(strObj3);
const strObj4 = new String(null);
console.log(strObj4);
const strObj5 = new String(true);
console.log(strObj5);

console.log("----------------------------------------------------");

// 2. length 프로퍼티
console.log("Hello".length);
console.log("안녕하세요?".length);

console.log("----------------------------------------------------");

// 3. String 메서드
// 1) String.prototype.indexOf
const str = "Hello World";

// 문자열 str에서 "l"을 검색하여 첫 번재 인덱스를 반환한다.
console.log(str.indexOf("l"));

// 문자열 str에서 "or"을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf("or"));

// 문자열 str에서 "x"을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf("x"));

// 문자열 str의 인덱스 4부터 "l"을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf("l", 4));

// 문자열 str에 "Hello"가 포함되어 있는 경우에 처리할 내용
const text = "Hello";
if (str.indexOf(text) !== -1) {
  console.log(`문자열에 ${text}가 포함되어 있다.`);
} else {
  console.log(`문자열에 ${text}가 포함되어 있지 않다.`);
}

// ES6에서 도입된 String.prototype.includes메서드를 사용하면 가독성이 더 좋다.
if (str.includes(text)) console.log(`문자열에 ${text}가 포함되어 있다.`);

console.log("----------------------------------------------------");

// 2) String.prototype.search
const str2 = "Hello World";
// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
console.log(str2.search(/o/));
console.log(str2.match(/o/));

console.log(str2.search(/x/));
console.log(str2.match(/x/));

console.log("----------------------------------------------------");

// 3) String.prototype.includes
const str3 = "Hello World";
console.log(str3.includes("Hello"));
console.log(str3.includes("o W"));
console.log(str3.includes("x"));
// includes 메서드의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
console.log(str3.includes("l", 3));
console.log(str3.includes("l", 4));
console.log(str3.includes("e", 2));

console.log("----------------------------------------------------");

// 4) String.prototype.startWith
const str4 = "Hello World";
// 문자열 str4이 "He"로 시작하는지 확인
console.log(str4.startsWith("He"));
// "he"로 시작하는지 확인
console.log(str4.startsWith("he"));
// "x"로 시작하는지 확인
console.log(str4.startsWith("x"));
// 인덱스 5부터 시작하는 문자열이 " "로 시작하는지 확인
console.log(str4.startsWith(" ", 5));

console.log("----------------------------------------------------");

// 5) String.prototype.endsWith
// "ld"로 끝나는지 확인
console.log(str4.endsWith("ld"));
// "x"로 끝나는지 확인
console.log(str4.endsWith("x"));
// 문자열 str4의 처음부터 5자리까지("Hello")가 "lo"로 끝나는지 확인
console.log(str4.endsWith("lo", 5));

console.log("----------------------------------------------------");

// 6) String.prototype.charAt
// 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다.
const str5 = "Hello";
console.log(str5.charAt(3));
console.log(str5.charAt(4));
console.log(str5.charAt(5));
for (var i = 0; i < str5.length; i++) {
  console.log(str5[i]);
}
for (var i = 0; i < str5.length; i++) {
  console.log(str5.charAt(i));
}

console.log("----------------------------------------------------");

// 7) String.prototype.substring
const str6 = "Hello World";
// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
console.log(str6.substring(1, 4));
console.log(str6.substring(1, 7));
console.log(str6.substring(4));

console.log("----------------------------------------------------");

// 첫 번째 인수 > 두 번재 인수인 경우 두 인수는 교환된다.
console.log(str6.substring(4, 1));

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
console.log(str6.substring(-12));

// 인수 > 문자열의 길이(str6.length)인 경우 인수는 문자열의 길이(str6.length)로 취급된다.
console.log(str6.substring(123));
console.log(str6.substring(0, 123));

console.log("----------------------------------------------------");

// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
console.log(str6.substring(0, str6.indexOf(" ")));
// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
console.log(str6.slice(str6.indexOf(" ") + 1, str6.length));

console.log("----------------------------------------------------");

// 8) String.prototype.slice
const str7 = "Hello World";

// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 문자까지 잘라내어 반환
console.log(str7.substring(0, 5));
console.log(str7.slice(0, 5));

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
console.log(str7.substring(2));
console.log(str7.slice(2));

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
console.log(str7.substring(-12));
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환
console.log(str7.slice(-5));

console.log("----------------------------------------------------");

// 9) String.prototype.toLowerCase
const str8 = "HELLO WORLD";
console.log(str8.toLowerCase());

console.log("----------------------------------------------------");

// 10) String.prototype.toUpperCase
const str9 = "hello world";
console.log(str9.toUpperCase());

console.log("----------------------------------------------------");

// 11) String.prototype.trim
// 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환
const str10 = "    foo    ";
console.log(str10.trim());
console.log(str10.trimStart());
console.log(str10.trimEnd());

console.log("----------------------------------------------------");

// 12) String.prototype.repeat
const str11 = "abc";
console.log(str11.repeat());
console.log(str11.repeat(0));
console.log(str11.repeat(1));
console.log(str11.repeat(2));
console.log(str11.repeat(2.4)); //(2.4 -> 2)
console.log(str11.repeat(3));

console.log("----------------------------------------------------");

// 13) String.prototype.replace
const str12 = "Hello world";

// str12에서 첫 번째 인수 "world"를 검색하여 두 번째 인수 "Lee"로 치환한다.
console.log(str12.replace("world", "Lee"));

// 검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.
const str13 = "Hello World world world";
console.log(str13.replace("world", "Kim"));

// 특수한 교체 패턴 사용 가능
console.log(str13.replace("world", "<strong>$&</strong>"));

// 첫 번째 인수로 정규 표현식을 전달할 수 있다.
console.log(str13.replace(/wo/g, "KK"));

console.log("----------------------------------------------------");

// 카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
  // /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치한다.
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 변환한 결과와 맻 결과를 치환한다.
  return camelCase.replace(/.[A-Z]/g, (match) => {
    console.log(match);
    return match[0] + "_" + match[1].toLowerCase();
  });
}
const str14 = "helloWorldMyNameIsKim";
console.log(camelToSnake(str14));

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
  // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치한다.
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
  return snakeCase.replace(/_[a-z]/g, (match) => {
    console.log(match);
    return match[1].toUpperCase();
  });
}
const str15 = "hello_world_my_name_is_kim";
console.log(snakeToCamel(str15));

console.log("----------------------------------------------------");

// 14) String.prototype.split
const str16 = "How are you doing?";

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
console.log(str16.split(""));

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
console.log(str16.split());

// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
console.log(str16.split(" "));

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다.
console.log(str16.split(/\s/));

console.log(str16.split("o"));

// 두 번재 인수로 배열의 길이를 지정할 수 있다.
// 공백으로 구분하여 배열로 반환한다. 단, 배열의 길이는 3이다.
console.log(str16.split(" ", 3));

// 인수로 전달받은 문자열을 역순으로 뒤집는다.
function reverseString(s) {
  return s.split("").reverse().join(" ");
}

console.log(reverseString("Hello World"));
