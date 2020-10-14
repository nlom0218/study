// 할당연산자(assignment operator)

var x;

x = 10;
console.log(x); // 10

x += 10; // x = x + 10
console.log(x); // 20

x -= 10; // x = x - 10
console.log(x); // 10

x *= 10; // x = x * 10
console.log(x); // 100

x /= 5; // x = x / 5
console.log(x); // 20

x %= 6; // x = x % 6
console.log(x); // 2

var str = "My name is";
str += " HD"; // str = str + "HD"
console.log(str); // My name is HD

var a, b, c;
a = b = c = 0;
console.log(a, b, c);

if (5 == "5") {
  // 동등 비교 연산자
  console.log("true");
} else {
  console.log("false");
}
// 동등 비교 연산자는 사용하지 않는 편이 좋다. 대신 일치 비교 연산(===) 사용하라.

``;
