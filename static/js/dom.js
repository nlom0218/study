const $elem = document.getElementById("banana");
// id 값이 'banana'인 요소 노드를 탐색

const $elems = document.getElementsByTagName("li");
// 태그 이름이 li인 요소 노드를 모두 탐색

const $fruits = document.getElementById("fruits");
const $lisFromFruits = $fruits.getElementsByTagName("li");
// ul#fruits 요소의 자손 노드 중에서 태그 이름이 li인 요소 노드를 모두 탐색

const $all = document.getElementsByTagName("*");
// 문서의 모든 요소 노드를 취득

const $elems2 = document.getElementsByClassName("fruit");
// class 값이 'fruit'인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환
// HTMLCollection 객체는 유사 배열이면서 이터러블이다.

const $apples = document.getElementsByClassName("fruit apple");
// class 값이 'fruit apple'인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환

const $bananasFromDocument = document.getElementsByClassName("banana");
// DOM 전체에서 class값이 'banana'인 요소 노드를 모두 탐색하여 반환

const $div = document.getElementById("fruits");
const $bananasFromFruits = fruits.getElementsByClassName("banana");
// #fruits 요소의 자손 노드 중에서 class값이 'banana'인 요소 노드를 모두 탐색하여 반환

const $html = document.querySelector(".html");
// class 어트리뷰트 값이 'html'인 첫 번째 요소를 탐색하여 반환

const $coding = document.querySelectorAll(".coding");
// class 어트리뷰트 값이 'coding'인 요소를 모두 탐색하여 반환
// 취득한 요소 노드들은 NodeList 객체에 담겨 반환된다.
// NodeList 객체는 유사 배열 객체이면서 이터러블이다.

const $elems3 = document.querySelectorAll("ul > li");
// ul 요소의 자식 요소인 li 요소를 모두 탐색하여 반환

const $all2 = document.querySelectorAll("*");
// 모든 요소 노드를 탐색하여 반환

// const $color = document.getElementsByClassName("red");

const $colorParents = document.querySelector(".color");

const $color2 = document.querySelectorAll(".red");
// querySelectorAll은 DOM 컬렉션 객체인 NodeList를 반환한다.

function changeColor() {
  if ($elem.style.color === "red") {
    $elem.style.color = "blue";
  } else {
    $elem.style.color = "red";
  }
}

function changeColor2() {
  //   for (var i = 0; i < $color.length; i++) {
  //     $color[0].className = "blue";
  //   }
  //   let i = 0;
  //   while ($color.length > i) {
  //     $color[0].className = "blue";
  //   }
  //   [...$color].forEach((elem) => (elem.className = "blue"));
  $color2.forEach((item) => (item.className = "blue"));
}

function remove() {
  const childArray = [...$colorParents.childNodes];
  childArray.forEach((childNodes) => {
    $colorParents.removeChild(childNodes);
  });
}

function init() {
  $elem.addEventListener("click", changeColor);
  [...$elems].forEach((elem) => (elem.style.color = "blue"));
  [...$elems2].forEach((elem) => (elem.style.color = "red"));
  [...$apples][0].style.color = "green";
  $html.style.color = "red";
  changeColor2();
  remove();
}
init();

console.log($elem);
console.log($elems);
console.log("-------------------------------------------------------");
console.log($lisFromFruits);
console.log($all);
console.log("-------------------------------------------------------");
console.log($elems2);
console.log($apples);
console.log($bananasFromDocument);
console.log($bananasFromFruits);
console.log("-------------------------------------------------------");
console.log($html);
console.log($coding);
console.log($elems3);
console.log($all2);
console.log("-------------------------------------------------------");
console.log($html.matches(".topic > .html"));
console.log($html.matches(".topic > li"));
console.log($html.matches(".topic > .coding"));
console.log($html.matches(".topic > .css"));
console.log("-------------------------------------------------------");
console.log($colorParents);
console.log($color2);
console.log([...$colorParents.childNodes]);
