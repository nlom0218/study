// 30장 Date
// 1. Date 생성자 함수
// 1) nwe Date
console.log(new Date());

console.log("--------------------------------------");

// 2) new Date(milliseconds)
// 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 시간을 반환
console.log(new Date(0));
console.log(new Date(86400000));
// 1s = 1000ms
// 1m = 60s * 1000ms = 60000ms
// 1h = 60m * 60000ms = 3600000ms
// 1d = 24h * 3600000ms = 86400000ms

console.log("--------------------------------------");

// 3) new Date(dateString)
console.log(new Date("May 26, 2020 10:00:00"));
console.log(new Date("2020/03/24/10:00:00"));

console.log("--------------------------------------");

// 4) new Date(year,month[day. hour, minute, second, millisecond])
// 월을 나타내는 2는 3월을 의미한다.
console.log(new Date(2020, 10));
console.log(new Date(2020, 10, 2, 18, 43));

console.log("--------------------------------------");

// 2. Date 메서드
// 1) Date.now
// 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환
console.log(Date.now());

console.log("--------------------------------------");

// 2) Date.parse
console.log(Date.parse("Jan 2, 1970 09:00:00"));

console.log("--------------------------------------");

// 3) Date.UTC
console.log(Date.UTC(1970, 0, 2));

// 4) Date.prototype.getFullYear
console.log(new Date().getFullYear());

// 5) Date.prototype.setFullYear
const today1 = new Date();
console.log(today1);

today1.setFullYear(1900);
console.log(today1);
console.log(today1.getFullYear());

today1.setFullYear(2000, 4, 5);
console.log(today1);
console.log(today1.getFullYear());

console.log("--------------------------------------");

// 6) Date.prototype.getMonth
console.log(new Date().getMonth());

console.log("--------------------------------------");

// 7) Date.prototype.setMonth
const today2 = new Date();
console.log(today2);

today2.setMonth(5);
console.log(today2);
console.log(today2.getMonth());

today2.setMonth(0, 1);
console.log(today2);
console.log(today2.getMonth());

console.log("--------------------------------------");

// 8) Date.prototype.getDate
console.log(new Date().getDate());

console.log("--------------------------------------");

// 9) Date.prototype.setDate
const today3 = new Date();
today3.setDate(5);
console.log(today3);

console.log("--------------------------------------");

// 10) Date.prototype.getDay
console.log(new Date().getDay());

console.log("--------------------------------------");

// 11) Date.prototype.getHours
console.log(new Date().getHours());

console.log("--------------------------------------");

// 12) Date.prototype.setHours
const today4 = new Date();

today4.setHours(15);
console.log(today4.getHours());

today4.setHours(15, 15, 15, 15);
console.log(today4);

console.log("--------------------------------------");

// 13) Date.prototype.getMinutes
console.log(new Date().getMinutes());

console.log("--------------------------------------");

// 14) Date.prototype.setMinutes
const today5 = new Date();
today5.setMinutes(49);
console.log(today5);
console.log(today5.getMinutes());

console.log("--------------------------------------");

// 15) Date.prototype.getSeconds
console.log(new Date().getSeconds());

console.log("--------------------------------------");

// 16) Date.prototype.setSeconds
const today6 = new Date();
today6.setSeconds(14);
console.log(today6);

// 17) Date.prototype.getMilliseconds
// 18) Date.prototype.setMilliseconds

// 19) Date.prototype.getTime
console.log(Date.now());
console.log(new Date().getTime());

console.log("--------------------------------------");

// 20) Date.prototype.setTime
// 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초 설정
const today7 = new Date();
today7.setTime(86400000);
console.log(today7);

console.log("--------------------------------------");

// 21) Date.prototype.getTimezoneOffset
const today8 = new Date();
console.log(today8.getTimezoneOffset() / 60);
// UTC와 today8의 지정 로캘 KST와의 차이는 -9시간이다.

console.log("--------------------------------------");

// 22) Date.prototype.toDateString
// 23) Date.portotype.toTimeString
const today9 = new Date();
console.log(today9.toDateString());
console.log(today9.toString());
console.log(today9);
console.log(today9.toTimeString());

console.log("--------------------------------------");

// 24) Date.prototype.toLocaleString
const today10 = new Date("2020/7/23/12:42");
console.log(today10.toString());
console.log(today10.toLocaleString());
console.log(today10.toLocaleString("ko-KR"));
console.log(today10.toLocaleString("ja-JP"));
// window에서 실행해볼것

// 3. Date를 활용한 시계 예제

const clock = document.getElementById("js-clock");

function printNow() {
  const today = new Date();
  const dayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  // getDay 메서드는 해당 요일(0~6)을 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12를 재할당

  // 10 미만의 분과 초를 2자리로 변경
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
  clock.innerText = now;
}

function init() {
  printNow();
  setInterval(printNow, 1000);
}
init();
