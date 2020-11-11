// 이벤트
console.log("1. 이벤트 핸들러 등록");

console.log("1) 이벤트 핸들러 어트리뷰트 방식");

const sayHi = (name) => console.log(`Hi ${name}`);

console.log("----------------------------------------");

console.log("2) 이벤트 핸들러 프로퍼티 방식");

const $btn = document.querySelector(".btn");
$btn.onclick = function () {
  console.log("Thank you for Click me!");
};

console.log("----------------------------------------");

console.log("3) addEventListener 메서드 방식");

const $btn2 = document.querySelector(".btn2");
$btn2.addEventListener("click", function () {
  console.log("addEventListener 방식으로 클릭!");
});

$btn2.onclick = function () {
  console.log("[이벤트 핸들러 프로퍼티 방식]으로 클릭");
};
// 결국 2개의 이벤트 핸들러가 모두 호출

$btn2.addEventListener("click", function () {
  console.log("하나 이상의 이벤트 핸들러 등록 가능!");
});

console.log("----------------------------------------");

console.log("2. 이벤트 핸들러 제거");

// EventTarget.prototpye.removeEventListener

const $btn3 = document.querySelector(".btn3");
$btn3.addEventListener("click", (e) => {
  console.log("Hello");
});
// 등록한 이벤트 핸들러를 참조할 수 없으므로 제거할 수 없다.

// 기명 함수를 이벤트 핸들러로 등록
$btn3.addEventListener("click", function foo() {
  console.log("Bye");
  // 이벤트 핸들러를 제거한다. 따라서 이벤트 핸들러는 단 한 번만 호출한다.
  $btn3.removeEventListener("click", foo);
});

console.log("----------------------------------------");

console.log("3. 이벤트 객체");

const $msg = document.querySelector(".message");

const showCoords = function (e) {
  $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
};

document.addEventListener("click", showCoords);

const $checkbox = document.getElementById("checkBox");
const $msg2 = document.querySelector(".message2");
console.log($checkbox);

function handleChange(e) {
  const statment = e.target.checked;
  console.log(statment);
  $msg2.textContent = e.target.checked ? "on" : "off";
}
$checkbox.addEventListener("change", handleChange);

console.log("----------------------------------------");

console.log("1) 마우스 정보 취득");

//드래그 대상 요소
const $box = document.querySelector(".box");

// 드래그 시작 시점의 마수으 포인터 위치
const initailMousePos = { x: 0, y: 0 };
// 오프셋: 이동할 거리
const offset = { x: 0, y: 0 };

const move = (e) => {
  offset.x = e.clientX - initailMousePos.x;
  offset.y = e.clientY - initailMousePos.y;
  $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
};

// mousedown 이벤트가 발생하면 드래그 시작 시점의 마우스 포인터 좌표를 저장한다.
$box.addEventListener("mousedown", (e) => {
  console.log(e.target);
  initailMousePos.x = e.clientX - offset.x;
  initailMousePos.y = e.clientY - offset.y;
  // mousedown 이벤트가 발생한 상태에서 mousemove 이벤트가 발생하면 box 요소를 이동
  document.addEventListener("mousemove", move);
});

// mouseup 이벤트가 발생하면 mousemove 이벤트를 제거해 이동을 멈춘다.
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});

console.log("----------------------------------------");

console.log("2) 키보드 정보 취득");

const $keyboard = document.getElementById("keyboard");
const $msg3 = document.querySelector(".message3");

const pushEnter = (e) => {
  if (e.key === "Enter") {
    $msg3.textContent = e.target.value;
    e.target.value = "";
  } else {
    return;
  }
};

$keyboard.addEventListener("keyup", pushEnter);

console.log("----------------------------------------");
