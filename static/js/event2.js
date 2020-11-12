console.log("1. 이벤트 전파");

const $fruits = document.getElementById("fruits");
const $apple = document.getElementById("apple");

const handleClick = (e) => {
  const phase = ["Capturing", "Target", "Bubbling"];
  console.log(
    e.target.nodeName,
    e.currentTarget.nodeName,
    phase[e.eventPhase - 1]
  );
};

$fruits.addEventListener("click", handleClick);
$apple.addEventListener("click", handleClick);
$fruits.addEventListener("click", handleClick, true);

console.log("-------------------------------------------");

console.log("2. 이벤트 위임");

const $animal = document.getElementById("event2-animal");
console.log($animal);
const $msg = document.querySelector(".msg");
console.log($msg);

// 사용자 클릭에 의해 선택된 내비게이션 아이템(li 요소)에 active 클래스를 추가
// 그 외의 모든 내비게이션 아이템의 active 클래스를 제거
activate = (e) => {
  [...$animal.children].forEach(($animal) => {
    if ($animal.id === e.target.id) {
      $animal.classList.add("active");
    } else {
      $animal.classList.remove("active");
    }
  });
  $msg.textContent = `${e.target.innerText}`;
};

// 모든 내이게이션 아이템(li 요소)에 이벤트 핸들러를 등록
document.getElementById("cat").addEventListener("click", activate);
document.getElementById("dog").addEventListener("click", activate);
document.getElementById("lion").addEventListener("click", activate);

const $person = document.getElementById("event2-person");

selectPerson = (e) => {
  console.log($person.children);
  console.log([...$person.children]);
  const liList = [...$person.children];
  liList.forEach((item) => {
    if (item.id === e.target.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  document.querySelector(".msg2").textContent = e.target.innerText;
};

$person.addEventListener("click", selectPerson);

console.log("-------------------------------------------");

console.log("3. DOM 요소의 기본 동작의 조작");

console.log("1) DOM 요소의 기본 동작 중단");
document.querySelector(".link").addEventListener("click", (e) => {
  // a 요소의 기본 동작을 중단한다.
  e.preventDefault();
});
document.querySelector(".check").addEventListener("click", (e) => {
  // checkbox 요소의 기본 동작을 중단한다.
  e.preventDefault();
});

console.log("-------------------------------------------");

console.log("2) 이벤트 전파 방지");

document.querySelector(".container").addEventListener("click", (e) => {
  e.target.style.color = "red";
});

document.querySelector(".btn1").addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.color = "blue";
});

document.querySelector(".btn2").addEventListener("click", (e) => {
  e.target.style.color = "blue";
});

console.log("-------------------------------------------");

console.log("4. 이벤트 핸들러 내부의 this");

console.log("1) 이벤트 핸들러 내부의 this");
function handleClick2() {
  console.log(this); // window
}
function handleClick3(button) {
  console.log(button);
  console.log(this);
}

console.log("-------------------------------------------");

console.log("2) 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식");

const $btn4 = document.querySelector(".btn4");
const $btn5 = document.querySelector(".btn5");

// 이벤트 핸들러 프로퍼티 방식
$btn4.onclick = function (e) {
  // this는 이벤트를 바인딩한 DOM 요소를 가리킨다.
  console.log(this);
  console.log(e.currentTarget);
  console.log(this === e.currentTarget);
};

// addEventListener 메서드 방식
$btn5.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.currentTarget);
  console.log(this === e.currentTarget);
  ++this.textContent; // $btn5의 textContent를 1 증가시킨다.
});

// 화살표 함수로 정의한 이벤트 핸들러 내부의 this는 상위 스코프의 this를 가리킨다.
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
