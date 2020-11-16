console.log("타이머");

console.log("1. 타이머 함수");
console.log("1) setTimeout/clearTimeout");

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log("Hi"), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 'lee'가 인수로 전달된다.
setTimeout((name) => console.log(`Hi! ${name}`), 1000, "Lee");

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log("Hello"));

// 2초(2000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
const timerId = setTimeout(() => console.log("Hi!"), 2000);

// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소
// 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않는다.
clearTimeout(timerId);

console.log("----------------------------------------------------------------");

console.log("2) setInterval/clearInterval");

let count = 1;

function timer2() {
  console.log(count);
  if (count === 5) clearInterval(timerId2);
  count = count + 1;
}
const timerId2 = setInterval(timer2, 1000);

console.log("----------------------------------------------------------------");
