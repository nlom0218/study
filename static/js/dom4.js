console.log("1. 어트리뷰트");

console.log("1) 어트리뷰트 노드와 attributes 프로퍼티");

const $input = document.getElementById("user");
const attributes = $input.attributes;

console.log(attributes);
console.log(attributes.id.value);
console.log(attributes.type.value);
console.log(attributes.value.value);

console.log("---------------------------------------");

console.log("2) HTML 어트리뷰트 조작");
// 어트리뷰트 값 참조 -> Element.prototype.getAttribute(attributeName)
// 어트리뷰터 값 변경 -> Element.prototype.setAttribute(attributeName, attributeValue)

// value 어트리뷰트 값을 취득
const inputValue = $input.getAttribute("value");
console.log(inputValue);

// value 어트리뷰트 값을 변경
$input.setAttribute("value", "Nice meet you!");
console.log($input.getAttribute("value"));

// value 어트리뷰트 존재 확인
if ($input.hasAttribute("value")) {
  // value 어트리뷰트 삭제
  $input.removeAttribute("value");
}

// value 어트리뷰트 존재 확인
console.log($input.hasAttribute("value")); // false

// value 어트리뷰트 값 설정
$input.setAttribute("value", "내가 다시 돌아왔다,,!");
console.log($input.getAttribute("value"));

console.log("---------------------------------------");

console.log("3) HTML 어트리뷰트 vs. DOM 프로퍼티");

const $input2 = document.getElementById("user2");
console.log($input2.value);

$input2.value = "foo";
// DOM 프로퍼티 -> 사용자가 입력한 최신 상태, 언제나 최신 상태를 유지
// 하지만 HTML에서는 바뀌지 않는다,!

console.log($input2.value);

console.log($input2.getAttribute("value") === $input2.value);

$input2.oninput = () => {
  console.log(`value 프로퍼티 값: ${$input2.value}`);
};

console.log($input2.id);
console.log($input2.getAttribute("id"));
// id 어트리뷰트와 id 프로퍼티는 사용자 입력과 관계없이 항상 동일한 값으로 연동
$input2.id = "foo";
console.log($input2.id);
console.log($input2.getAttribute("id"));

const $checkbox = document.querySelector("input[type=checkbox");
// getAttribute 메서드로 취득한 어트리뷰트 값은 언제나 문자열이다.
console.log($checkbox.getAttribute("checked"));
// DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐 수도 있다.
console.log($checkbox.checked);

console.log("---------------------------------------");

console.log("4) data 어트리뷰트와 dataset 프로퍼티");

const $users = document.querySelector(".users");
const $usersArray = [...$users.children];

// user-id가 "1532" 인 요소 노드를 취득한다.
const firstUser = $usersArray.find((user) => user.dataset.userId === "1532");
console.log(firstUser);

// user-id가 "1532" 인 요소 노드의 data-role 값을 변경한다.
firstUser.dataset.role = "subscriber";
console.log(firstUser);
console.log(firstUser.dataset);

// user-id가 "6714" 인 요소 노드를 취득한다.
const secondUser = $usersArray.find((user) => user.dataset.userId === "1234");
console.log(secondUser);

// user-id가 "6714" 인 요소 노드에 새로운 data 어트리뷰트를 추가한다.
secondUser.dataset.userAge = 19;
console.log(secondUser);
console.log(secondUser.dataset);

console.log("---------------------------------------");

console.log("2. 스타일");

console.log("1) 인라인 스타일 조작");

const $text = document.getElementById("text");
console.log($text);

// 인라인 스타일 취득
console.log($text.style);

// 인라인 스타일 변경
$text.style.color = "blue";
$text.style.height = "100px";
$text.style.backgroundColor = "yellow";

firstUser.style.color = "pink";
secondUser.style.color = "gray";

console.log("---------------------------------------");

console.log("2) 클래스 조작 - className");

const $ex1 = document.querySelector(".ex1");
console.log($ex1);
console.log($ex1.className);

$ex1.addEventListener("click", changeBackground);

function changeBackground() {
  if ($ex1.className === "ex1") {
    $ex1.className = "ex2";
  } else {
    $ex1.className = "ex1";
  }
}

console.log("---------------------------------------");

console.log("3) 클래스 조작 - classList");

const $box = document.querySelector(".box");
console.log($box);
console.log($box.classList);

$box.classList.replace("box1", "box2");
$box.classList.add("box3", "box4");
$box.classList.remove("box2");
$box.classList.remove("box4");
console.log($box.classList.item(1));
console.log($box.classList.contains("box3"));
console.log($box.classList.contains("box2"));

// 인수로 전달한 문자열과 일치하는 클래스가 존재하면 제거, 존재하지 않으면 추가
$box.classList.toggle("box4");
$box.classList.toggle("box4");

console.log("---------------------------------------");

console.log("4) 요소에 적용되어 있는 CSS 스타일 참조");

const $child = document.querySelector(".child");

// .child 요소에 적용된 모든 CSS 스타일을 담고 있는 CSSStyleDeclaration 객체 취득
const computedStyle = window.getComputedStyle($child);
console.log(computedStyle);

// 임베딩 스타일
console.log(computedStyle.width);
console.log(computedStyle.height);
console.log(computedStyle.backgroundColor);
console.log(computedStyle.border);

// 상속 스타일 (.parents -> .child)
console.log(computedStyle.color);

// 기본 스타일
console.log(computedStyle.display);
