// 1. 요소 노드의 텍스트 조작

// 1) nodeValue

console.log(document.nodeValue); // null
// 문서 노드의 nodeValue 프로퍼티를 참조한다.

const $foo = document.getElementById("foo");
console.log($foo.nodeValue); // null
// 요소 노드의 nodeValue 프로퍼티를 참조한다.

const $textNode = $foo.firstChild;
console.log($textNode.nodeValue); //Hello
// 텍스트 노드의 nodeValue 프로퍼티를 참조한다.

// 텍스트 노드의 nodeValue 프로퍼티를 참조할 때만 텍스트 노드의 값,
// 즉, 텍스트를 반환한다. 나머지 노드 객체의 nodeValue 프로퍼티를
// 참조하면 null을 반환하므로 의미가 없다.

$textNode.nodeValue = "Hi";
// 텍스트 노드의 값을 변경

console.log($textNode.nodeValue); // Hi

console.log("---------------------------------------------------------");

// 2) textContent

const $boo = document.getElementById("boo");
console.log($boo.textContent);
// #boo 요소 노드의 텍스트를 모두 취득한다. 이때 HTML 마크업은 무시된다.

$boo.textContent = "Nice to <span>meet you</span>";
// 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가
// 이때 HTML 마크업이 파싱되지 않는다.

// 요소 노드의 콘텐츠 영역에 자식 요소가 없고 텍스트만 존재한다면
// firstChild.nodeValue와 textContent는 같은 결과를 반환한다.
console.log($foo.firstChild.nodeValue === $foo.textContent);

console.log("---------------------------------------------------------");

// 2. DOM 조작

// 1) innerHTML

const $voo = document.getElementById("voo");
console.log($voo.innerHTML);
// #voo 요소의 콘텐츠 영역 내의 HTML 마크업을 문자열로 취득한다.

$voo.innerHTML = "Nice to <span>meet you! </span>";
// HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

// 노드 추가
$voo.innerHTML += "<span>I'm HongDong</span>";

// 노드 교체
$voo.innerHTML = "Nice to <span>meet you!</span> <span>I'm student~!";

// 노드 삭제
$voo.innerHTML = "";

console.log("---------------------------------------------------------");

// 2) insertAdjcentHTML 메서드

const $aoo = document.getElementById("aoo");
console.log($aoo);

$aoo.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
$aoo.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
$aoo.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
$aoo.insertAdjacentHTML("afterend", "<p>afterend</p>");

console.log("---------------------------------------------------------");

// 3) 노드 생성과 추가

const $fruits = document.getElementById("fruits");
console.log($fruits);

console.log("---------------------------------------------------------");

// 3-1) 요소 노드 생성
// Document.prototype.createElement(tagName)

const $li = document.createElement("li");

// 현재 생성된 요소 노드는 아무런 자식 노드가 없다.
console.log($li.childNodes); // NodeList[]

console.log("---------------------------------------------------------");

// 3-2) 텍스트 노드 생성
// Document.prototype.createTextNode(text)

const textNode = document.createTextNode("Banana");

// 아직 요소 노드에 아무런 자식이 없다. 텍스트 노드를 요소 노드에 추가하지 않았기 때문이다.
console.log($li.childNodes);

console.log("---------------------------------------------------------");

// 3-3) 텍스트 노드를 요소 노드의 자식으로 추가
// Node.prototype.appendChild(childNode)
$li.appendChild(textNode); // = $li.textContent = "Banana"

// 요소 노드에 텍스트 노드가 자식 노드로 추가 되었다.
console.log($li.childNodes);

console.log("---------------------------------------------------------");

// 3-4) 요소 노드를 DOM에 추가
// $li 요소 노드를 $fruits 요소 노드의 마지막 자식 노드로 추가
$fruits.appendChild($li);

console.log($fruits);

console.log("---------------------------------------------------------");

// 4) 복수의 노드 생성과 추가

const $animal = document.getElementById("animal");

["Cat", "Dog", "Lion"].forEach(addEnimal);

function addEnimal(text) {
  // 요소 노드 생성
  const $li = document.createElement("li");
  // 텍스트 노드 생성
  const textNode = document.createTextNode(text);
  // 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
  $li.appendChild(textNode);
  // $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
  $animal.appendChild($li);
}
// 2, 3번째 과정 대신
// $li.textContent = text
// 를 사용해도 괜찮다.(위의경우엔,,!)

// 위의 복수의 노드 생성과 추가는 DOM에 3번 추가하므로 리플로우와 리페인트가 3번 실행,,
// 그러므로 비효율적이다,,, 이를 해결해주기 위한 노드는 바로,,
// DocumentFragment 노드이다.

const $fragement = document.createDocumentFragment();
["Fox", "호랑이", "캥거루"].forEach((text) => {
  const $li = document.createElement("li");
  // const textNode = document.createTextNode(text);
  // $li.appendChild(textNode);
  $li.textContent = text;
  $fragement.appendChild($li);
});
$animal.appendChild($fragement);

// 이처럼 여러 개의 요소 노드를 DOM에 추가하는 경우 DocumentFragment 노드를 사용하는 것이 효율적!

console.log("---------------------------------------------------------");

// 5) 노드 삽입

// 5-1) 마지막 노드로 추가
// Node.prototype.appendChild 메서드는 인수로 전달받은 노드를 자신이 호출한 노드의
// 마지막 자식 노드로 DOM에 추가한다. 위치 지정 No!

$AnimalLi = document.createElement("li");
$AnimalLi.appendChild(document.createTextNode("Pig"));
$animal.appendChild($AnimalLi);

// 5-2) 지정한 노드 삽입
// Node.prototype.insertBefor(newNode, childNode)

$AnimalLi2 = document.createElement("li");
$AnimalLi2.appendChild(document.createTextNode("말"));

// $AnimalLi2 요소 노드를 #animal 요소 노드의 마지막 자식 요소 앞에 삽입
$animal.insertBefore($AnimalLi2, $animal.lastElementChild);

// 두 번째 인수로 전달받은 노드는 반드시 insertBefore 메서드를 호출한 노드의 자식 이여야 한다.
// 두 번째 인수로 전달받은 노드가 null이면 appendChild 메서드 처럼 동작한다.

// 6) 노드 이동

const [$cat, $dog] = $animal.children;
console.log($cat, $dog);

// 이미 존재하는 $cat 요소 노드를 #animal 요소 노드의 마지막으로 이동
$animal.appendChild($cat);

// 이미 존재하는 $dog 요소 노드를 #animal 요소의 마지막 자식 노드 앞으로 이동
$animal.insertBefore($dog, $animal.lastElementChild);

console.log("---------------------------------------------------------");

// 7) 노드 복사
// Node.prototype.cloneNode([deep: true | false])

const $name = document.getElementById("name");
const $kim = $name.firstElementChild;

// $kim 요소를 얕은 복사하여 사본을 생성. 텍스트 노드가 없는 사본이 생성된다.
const $shallowClone = $kim.cloneNode();
// 사본 요소 노드에 텍스트 추가
$shallowClone.textContent = "Lee";
// 사본 요소 노드를 #name 요소 노드의 마지막 노드로 추가
$name.appendChild($shallowClone);

// #name 요소를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성
const $deepClone = $name.cloneNode(true);
// 사본 요소 노드를 #foo, #name 요소 노드의 마지막 노드로 추가
$name.appendChild($deepClone);
console.log($foo.appendChild($deepClone));

console.log("---------------------------------------------------------");

// 8) 노드 교체
// Node.prototype.replaceChild(newChile, oldChild)

// 기존 노드와 교체할 요소 노드를 생성
const $newChild = document.createElement("li");
$newChild.textContent = "고양이";
console.log($newChild);

// #animal 요소 노드의 마지막 자식 요소 노드를 $newChild 요소 노드로 교체
$animal.replaceChild($newChild, $animal.lastElementChild);

console.log("---------------------------------------------------------");

// 9) 노드 삭제
// Node.prototype.removeChild(child)

// #animal 요소 노드의 첫 번째 요소를 DOM 에서 삭제
console.log($animal.removeChild($animal.firstElementChild));
