// 스코프
console.log("스코프란?");
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}

foo();
console.log(x); //global

// 스코프 체인에 의한 변수 검색
console.log("스코프 체인에 의한 변수 검색");
function voo() {
  console.log("global function voo");
}
function bar() {
  function voo() {
    console.log("local function foo");
  }
  voo();
}
voo();
bar();

// 함수 레벨 스코프
console.log("함수 레벨 스코프");
var z = 1;
// if (true) var z = 10;
// console.log(z);
function zoo() {
  var z = 5;
  console.log(z);
}
console.log(z);
zoo();

var i = 12312312;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// 렉시컬 스코프
console.log("렉시컬 스코프");
var a = 1;

function aoo() {
  var a = 10;
  boo();
}

function boo() {
  console.log(a);
}

aoo(); // 1
boo(); // 1
