// 36장 디스트럭처링 할당

// 1. 배열 디스트럭처링 할당
// ES5
var arr1 = [1, 2, 3];
var one1 = arr1[0];
var two1 = arr1[1];
var three1 = arr1[2];
console.log(one1, two1, three1);

// ES6
const arr2 = [1, 2, 3];
// 변수 one2, two2, three2를 선언하고 배열 arr2을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one2, two2, three2] = arr2;
console.log(one2, two2, three2);

// 배열 디스트럭처링 할당의 기준은 배열의 인덱스다. 즉, 순서대로 할당된다.
// 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.
const [a, b] = [1, 2];
console.log(a, b);
const [c, d] = [1];
console.log(c, d);
const [e, f] = [1, 2, 3];
console.log(e, f);
const [g, , h] = [1, 2, 3];
console.log(g, h);

// 배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
const [i, j, k = 100] = [1, 2];
console.log(i, j, k);
// 기본값보다 할당된 값이 우선한다.
const [l, n = 30, m, o = 40] = [1, 2];
console.log(l, n, m, o);

console.log("----------------------------------------------------------");

// 2. 객체 디스트럭처링 할당

// ES5
var user = { firstName: "HongDong", lastName: "Kim" };
var firstName = user.firstName;
var lastName = user.lastName;
console.log(firstName, lastName);

// ES6
const user2 = { firstName2: "HongDong", lastName2: "Kim" };
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트릭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName2, firstName2 } = user2;
console.log(lastName2, firstName2);

const { lastName3: ln3, firstName3: fn3 } = {
  firstName3: "Ungmo",
  lastName3: "Lee",
};

console.log(ln3, fn3);

const { firstName4 = "Ungmo", lastName4 } = { lastName4: "Lee" };
console.log(firstName4, lastName4);

const { firstName5: fn5 = "Ungmo", lastName5: ln5 } = { lastName5: "Lee" };
console.log(fn5, ln5);

console.log(lastName2, fn3);
console.log(ln5, firstName2);

console.log("----------------------------------------------------------");

const str = "Hello";
// String 래퍼 객체로부터 length 프로퍼티만 추출한다.
const { length } = str;
console.log(length);

const todo = { id: 1, content: "HTML", completed: true };
const { id, content, completed } = todo;
console.log(id);

function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}

printTodo(todo);

console.log("----------------------------------------------------------");

// 배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.
const todos = [
  { id4: 1, content: "HTML", completed: true },
  { id4: 2, content: "CSS", completed: false },
  { id4: 3, content: "JS", completed: false },
];
// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { id4 }] = todos;
console.log(id4);

console.log("----------------------------------------------------------");

// 중첩 객체의 경우
const user3 = {
  name: "Lee",
  address: {
    zipCode: "6932",
    city: "Seoul",
  },
};
// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const {
  address,
  address: { city: CITY },
} = user3;
console.log(address);
console.log(CITY);

console.log("----------------------------------------------------------");

// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest);
