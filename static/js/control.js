var num = 5;
var kind;

if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}

console.log(num, kind);

var x = 90;
//var result;

// if (x % 2) {
//   // 나머지가 0일때 false로 암묵적 강제 변환된다.
//   result = "홀수";
// } else {
//   result = "짝수";
// }
// console.log(result);

var result = x % 2 ? "홀수" : "짝수";
console.log(result);

switch ("똥깨") {
  case "바보":
    text = "바보멍청이";
    break;
  case "메롱":
    text = "메롱 약오르지롱";
    break;
  case "똥깨":
    text = "똥냄새나는 똥깨";
    break;
  default:
    text = "Invalid";
}

console.log(text);

//윤년계산
var year = 2200;
var month = 2;
var days;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}
console.log(days);

// 반복문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 주사위를 던졌을 때 두눈의 합이 6이 되는 모든 경우의 수를 출력하라
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 4) console.log(`[${i}, ${j}]`);
  }
}

var count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count--;
} while (count > 3);

//break문
var string = "Hello World";
var search = "l";
var index;
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break;
  }
}
console.log(index);
console.log(string.indexOf(search));
//"Hello World"에서 처음으로 r이 언제 나타는지 알려주는 로직

//contiune문
//문자열에서 특정 문자의 개수를 세는 예
var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) {
    continue;
  }
  count++;
}
console.log(count);
