// 노드 탐색의 기점이 되는 #fruits 요소 노드를 취득한다.
const $fruits = document.getElementById("fruits");
console.log($fruits);

const $notThing = document.getElementById("notThing");

console.log("------------------------------------------------------");

// 자식노드 탐색

// #fruits 요소의 모든 자식 노드를 탐색한다.
// childNodes 프로퍼티가 반환한 NodeList에는 요소 노드뿐만 아니라 텍스트 노드도 포함되어 있다.
console.log($fruits.childNodes);

// chlidren 프로퍼티가 반환한 HTMLCollection에는 요소 노드만 포함되어 있다.
console.log($fruits.children);

console.log("------------------------------------------------------");

// #fruits 요소의 첫 번째 자식 노드를 탐색한다.
console.log($fruits.firstChild);
console.log($fruits.firstElementChild);

console.log("------------------------------------------------------");

// #fruits 요소의 마지막 자식 노드를 탐색한다.
console.log($fruits.lastChild);
console.log($fruits.lastElementChild);

console.log("------------------------------------------------------");

// 자식 노드 존재 확인 => Node.prototype.hasChildNodes 메서드 사용 (true / false)

// hasChildNodes 메서드는 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다 하는데,,
// 실제로 콘솔 창에 찍어보면 text 노드는 반환하지 않는다,,
console.log($fruits.hasChildNodes());
console.log($notThing.hasChildNodes());
console.log($notThing.children.length);
console.log($notThing.childElementCount);

console.log("------------------------------------------------------");

// 부모 노드 탐색 => Node.prototype.parentNode

// 노드 탐색의 기점이 되는 .banana 요소 노드를 취득한다.
const $banana = document.querySelector(".banana");
console.log($banana);
console.log($banana.parentNode);

console.log("------------------------------------------------------");

// 형제 노드 탐색

// Node.prototype.previousSibling & Element.prototype.previousElementSibling
console.log($banana.previousSibling);
console.log($banana.previousElementSibling);

console.log("------------------------------------------------------");

// Node.prototype.nextSibling & Element.prototype.nextElementSibling
console.log($banana.nextSibling);
console.log($banana.nextElementSibling);

console.log("------------------------------------------------------");

// 노드 정보 취득

// Node.prototype.nodeType
console.log($fruits.nodeType);
console.log($banana.nodeType);

// Node.prototype.nodeName
console.log($fruits.nodeName);
console.log($banana.nodeName);
