// 배열 Array

// 1. 배열생성
// 1) 배열 리터럴
const arr = [1, 2, 3];
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

const arr2 = [];
console.log(arr2);
console.log(arr2.length);

const arr3 = [1, , 3]; // 희소배열
console.log(arr3);
// 희소배열의 length은 배열의 실제 요소 개수보다 언제나 크다.
console.log(arr3.length);
console.log(arr3[1]);

console.log("-----------------------------------------------");

// 2) Array 생성자 함수
// 전달된 인수가 1개인고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.
const arr4 = new Array(10);
console.log(arr4);
console.log(arr4.length);
// 이때 생성된 배열은 희소배열이다.
// length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr4));

// 전달된 인수가 없는 경우 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.
const arr5 = new Array();
console.log(arr5);
console.log(arr5.length);

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
const arr6 = new Array(1, 2);
console.log(arr6);
console.log(arr6.length);

const arr7 = new Array("Kim");
console.log(arr7);

const arr8 = new Array("Kim", "Woo", "Lee");
console.log(arr8);

const arr9 = new Array({}, {});
console.log(arr9);

// Array 생성자 함수는 new연산자와 함께 호출하지 않더라도,
// 즉 일반 함수로서 호출해서 배열을 생성하는 생성자 함수로 동작한다.
const arr10 = Array(1, 2, 3);
console.log(arr10);

console.log("-----------------------------------------------");

// 3) Array.of(ES6)
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
const arr11 = Array.of(11);
console.log(arr11);

const arr12 = Array.of(11, 12, 13);
console.log(arr12);

const arr13 = Array.of("Kim", "Woo");
console.log(arr13);

console.log("-----------------------------------------------");

// 4) Aarry.from(ES6)
// 유사 배열 객체를 변환하여 배열을 생성한다.
const arr14 = Array.from({ length: 2, 0: "a", 1: "b" });
console.log(arr14);

// 이터러블을 변화하여 배열을 생성한다. 문자열은 이터러블이다.
const arr15 = Array.from("Hello");
console.log(arr15);
console.log(arr15.length);

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
const arr16 = Array.from({ length: 3 });
console.log(arr16);

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
const arr17 = Array.from({ length: 3 }, (_, i) => i);
console.log(arr17);

console.log("-----------------------------------------------");

// 2. 배열 요소의 추가와 갱신
const arr18 = [0];
//배열 요소의 추가
arr18[1] = 1;
console.log(arr18);
console.log(arr18.length);

arr18[100] = 100;
console.log(arr18);
console.log(arr18.length);

console.log(Object.getOwnPropertyDescriptors(arr18));

arr18[1] = 10;
console.log(arr18);

// 인덱스는 반드시 0이상의 정수(또는 정수 형태의 문자열)를 사용해야 한다.
// 정수 이외의 값을 인덱스처럼 사용하면 요소가 아니라 프로퍼티가 생성된다.
const arr19 = [];
// 배열 요소의 추가
arr19[0] = 1;
arr19["1"] = 2;

// 프로퍼티 추가
arr19["foo"] = 3;
arr19.bar = 4;
arr19[1.1] = 5;
arr19[-1] = 6;

console.log(arr19);

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr19.length);

console.log("-----------------------------------------------");

// 3. 배열 요소의 삭제
// 1) delete
const arr20 = [1, 2, 3];
// 배열 요소의 삭제
delete arr20[1];
console.log(arr20);
// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr20.length);

// 2) Array.prototype.splice 메서드
const arr21 = [1, 2, 3, 4, 5, 6];
// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr[1]부터 1개의 요소를 제거
arr21.splice(1, 1);
console.log(arr21);
// length 프로퍼티가 자동 갱신된다.
console.log(arr21.length);

const arr22 = [1, 2, 3, 4, 5, 6];
// arr[2]부터 3개의 요소를 제거
arr22.splice(2, 3);
console.log(arr22);
console.log(arr22.length);

console.log("-----------------------------------------------");

// 4. 배열 메서드
const arr23 = [1];
// push 메서드는 원본 배열(arr23)을 직접 변경한다.
arr23.push(2, 3, 4);
console.log(arr23);

// concat 메서드는 원본 배열(arr23)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr23.concat(3);
console.log(arr23);
console.log(result);

// 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.

console.log("-----------------------------------------------");

// 1) Array.isArray(Array 생성자 함수의 정적 메서드)
// Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

console.log("-----------------------------------------------");

// 2) Array.prototype.indexOf
const arr24 = [1, 2, 2, 3];
// 배열 arr24에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr24.indexOf(2);
console.log(arr24.indexOf(2));

// 배열 arr24에 요소 4가 없으므로 -1를 반환한다.
console.log(arr24.indexOf(4));

// 두 번째 인수를 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr24.indexOf(2, 2));

const foods = ["apple", "banana", "orange"];
// foods 배열에 "orange" 요소가 존재하는지 확인한다.
if (foods.indexOf("orange") === -1) {
  // foods 배열에 "orange" 요소가 존재하지 않으면 "orange" 요소를 추가한다.
  foods.push("orange");
}
if (foods.indexOf("mongo") === -1) {
  foods.push("mongo");
}
console.log(foods);

//  ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
const foods2 = ["apple", "banana", "orange"];
// foods 배열에 "orange" 요소가 존재하는지 확인한다.
if (!foods2.includes("orange")) {
  foods2.push("orange");
}
console.log(foods2);

console.log("-----------------------------------------------");

// 3) Array.prototype.push
const arr25 = [1, 2];
// 인수로 전달받은 모든 값을 원본 배열 arr25의 마지막 요소로 추가하고 변경된 length값을 반환한다.
let result25 = arr25.push(3, 4);
console.log(result25);

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr25);

// 마지막 요소로 추가할 요소가 하나뿐이라면 push메서드 보단 length 프로퍼티를 사용하면 더 빠르다.
const arr26 = [1, 2];
// arr.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
arr26[arr26.length] = 3;
console.log(arr26);

// push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다.
// 따라서 push 메서드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다.
const arr27 = [1, 2];
// ES6 스프레드 문법
const newArr27 = [...arr27, 3];
console.log(newArr27);

console.log("-----------------------------------------------");

// 4) Array.prototype.pop
const arr28 = [1, 2];
const result28 = arr28.pop();
console.log(result28);

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr28);

console.log("-----------------------------------------------");

// 5) Array.prototype.unshift
const arr29 = [1, 2];
const result29 = arr29.unshift(3, 4);
console.log(result29);
// unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr29);

// unshift 메서드는 push 메서드와 마찬가지로 원본 배열을 직접 변경하는 부수 효과가 있다.
// 그러므로 ES6의 스프레드 문법을 사용하는 편이 좋다.
const arr30 = [1, 2];
const newArr30 = [3, 4, ...arr30];
console.log(arr30);
console.log(newArr30);

console.log("-----------------------------------------------");

// 6) Array.prototype.shift
const arr31 = [1, 2];
// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result31 = arr31.shift();
console.log(result31);
console.log(arr31);

console.log("-----------------------------------------------");

// 7) Array.prototype.concat
const arr32 = [1, 2];
const arr33 = [3, 4];
// 배열 arr33를 원본 배열 arr32의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
const result32 = arr32.concat(arr33);
console.log(result32);

// 숫자를 원본 배열 arr32의 마지막 요소로 추가한 새로운 배열을 반환한다.
const result32_1 = arr32.concat(3);
console.log(result32_1);

// 배열 arr33와 숫자를 원본 배열 arr32의 마지막 요소로 추가한 새로운 배열을 반환한다.
const result32_2 = arr32.concat(arr33, 5);
console.log(result32_2);

// 원본 배열은 변경되지 않는다.
console.log(arr32);

// push, unshift VS concat
const arr34 = [3, 4];
// push와 unshift 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다.
arr34.unshift([1, 2]);
arr34.push([5, 6]);
console.log(arr34);

// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result34 = [1, 2].concat([3, 4]);
result34 = result34.concat([5, 6]);
console.log(result34);

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
const arr35 = [3, 4];
const newArr35 = [...[1, 2], ...arr35, ...[5, 6]];
console.log(newArr35);

console.log("-----------------------------------------------");

// 8) Array.prototype.splice
// 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice메서드를 사용
const arr36 = [1, 2, 3, 4];
// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result36 = arr36.splice(1, 2, 20, 30);
// 제거한 요소가 배열로 반환된다.
console.log(result36);
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr36);

const arr37 = [1, 2, 3, 4];
// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result37 = arr37.splice(1, 0, 20, 30);
console.log(result37);
console.log(arr37);

const arr38 = [1, 2, 3, 4];
// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
const result38 = arr38.splice(1, 2);
console.log(result38);
console.log(arr38);

const arr39 = [1, 2, 3, 4];
// 원본 배열의 인덱스 2부터 모든 요소를 제거한다.
const result39 = arr39.splice(2);
console.log(result39);
console.log(arr39);

// 배열에서 특정 요소를 제거하려면 indexOf 메서드와 splice 메서드를 사용한다.
const arr40 = [1, 2, 3, 1, 2];
// 배열 array에서 item요소를 제거한다. item요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
function remove40(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
console.log(remove40(arr40, 2));
console.log(remove40(arr40, 1));
console.log(remove40(arr40, 5));

// filter 메서드를 사용하여 특정 요소를 제거할 수도 잇다. 하지만 특정 요소가 중복된 경우 모두 제거된다.
const arr41 = [1, 2, 3, 1, 2];
// 배열 array에서 모든 item요소를 제거한다.
function remove41(array, item) {
  return array.filter((v) => v !== item);
}
console.log(remove41(arr41, 1));

console.log("-----------------------------------------------");

// 9) Array.prototype.slice
const arr42 = [1, 2, 3];

// arr42[0]부터 arr42[1] 이전(arr42[1] 미포함)까지 복사하여 반환한다.
console.log(arr42.slice(0, 1));

// arr42[1]부터 arr42[2] 이전(arr42[2] 미포함)까지 복사하여 반환한다.
console.log(arr42.slice(1, 2));

// 원본은 변경되지 않는다.
console.log(arr42);

// arr42[1]부터 이후의 모든 요소를 복사하여 반환한다.
console.log(arr42.slice(1));

// 배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
console.log(arr42.slice(-1));
// 배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
console.log(arr42.slice(-2));

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr42.slice();
console.log(copy);

console.log(copy === arr42);

console.log("-----------------------------------------------");

// 10) Array.prototype.join
const arr43 = [1, 2, 3, 4];

// 기본 구분자는 콤마다.
// 원본 배열 arr43의 모든 요소를 문자열로 변환한 후 기본 구분자로 연결한 문자열을 반환한다.
console.log(arr43.join());

// 원본 배열 arr43의 모든 요소를 문자열로 변환한 후, 빈 문자열로 연결한 문자열을 반환한다.
console.log(arr43.join(""));

// 원본 배열 arr43의 모든 요소를 문자열로 변환한 후 구분자 ":"로 연결한 문자열을 변환한다.
console.log(arr43.join(":"));

console.log("-----------------------------------------------");

// 11) Array.prototype.reverse
const arr44 = [1, 2, 3, 4];
const result44 = arr44.reverse();
// 반환값은 변경된 배열이다.
console.log(result44);
// reverse 메서드는 원본 배열을 직접 변경한다.
console.log(arr44);

console.log("-----------------------------------------------");

// 12) Array.prototype.fill(ES6에 도입)
const arr45 = [1, 2, 3];
// 인수로 전달받은 값 0을 배열의 처음부터 끝가지 요소로 채운다.
arr45.fill(0);
// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr45);

const arr46 = [1, 2, 3, 4];
arr46.fill(0, 1);
console.log(arr46);

const arr47 = [1, 2, 3, 4, 5];
arr47.fill(0, 1, 3);
console.log(arr47);

const arr48 = new Array(3);
console.log(arr48);

arr48.fill(2);
console.log(arr48);

console.log("-----------------------------------------------");

// 13) Array.prototype.includes(ES7에 도입)
const arr49 = [1, 2, 3];
console.log(arr49.includes(2));
console.log(arr49.includes(4));

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인한다.
console.log(arr49.includes(1, 1));
// 배열에 요소 3이 포함되어 있는지 인덱스 2(arr49.length - 1)부터 확인한다.
console.log(arr49.includes(3, -1));

const animal = ["dog", "cat"];
const addAnimalName = (name) => {
  if (animal.includes(name)) {
    animal;
  } else {
    animal.unshift(name);
  }
  return animal;
};
console.log(animal);
console.log(addAnimalName("cow"));
console.log(addAnimalName("cat"));

console.log("-----------------------------------------------");

// 14) Array.prototype.flat(무려,, ES10(ECMAScript 2019)에서 도입)

console.log("-----------------------------------------------");

// 5. 배열 고차 함수
// 1) Array.prototype.sort
const arr50 = ["Banana", "Orange", "Apple"];
// 오른차순(ascending) 정렬
arr50.sort();
// sort 메서드는 원본 배열을 직접 변경한다.
console.log(arr50);

// 한글 문자열도 가능!
const arr51 = ["바나나", "오렌지", "사과"];
arr51.sort();
console.log(arr51);

arr50.reverse();
console.log(arr50);

// 숫자 요소로 이루어진 배열
const arr52 = [40, 100, 1, 5, 2, 25, 10];
arr52.sort();
console.log(arr52); // 의도한 대로 정렬되지 않는다.

const arr53 = [40, 100, 1, 5, 2, 25, 10];
// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
arr53.sort((a, b) => a - b);
console.log(arr53);

// 숫자 배열에서 최소/최대값 취득
console.log(arr53[0], arr53[arr53.length - 1]);

// 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
arr53.sort((a, b) => b - a);
console.log(arr53);

const arr54 = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];
// 비교함수. 매개변수 key는 프로퍼티 키다.
function compare(key) {
  // 프로퍼티 값이 문자열이 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// id를 기준으로 오름차순 정렬
arr54.sort(compare("id"));
console.log(arr54);

// content를 기준으로 오름차순 정렬
arr54.sort(compare("content"));
console.log(arr54);

console.log({ id: 4, content: "JavaScript" }["id"]);

console.log("-----------------------------------------------");

// 2) Array.prototype.forEach
const arr55 = [1, 2, 3];
const pows55 = [];
// for 문으로 배열 순회
for (i = 0; i < arr55.length; i++) {
  pows55.push(arr55[i] ** 2);
}
console.log(pows55);

// forEach 메서드 사용
const arr56 = [1, 2, 3];
const pows56 = [];
// forEach 메서드는 arr56 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
arr56.forEach((item) => pows56.push(item * 2));
console.log(pows56);

// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값:${item}, 인덱스:${index}, this:${JSON.stringify(arr)}`);
});

const arr57 = [1, 2, 3];
arr57.forEach((item, index, arr) => {
  arr[index] = item * 2;
});
console.log(arr57);

// 희소 배열
const arr58 = [1, , 3];
// for 문으로 희소 배열을 순회
for (i = 0; i < arr58.length; i++) {
  console.log(arr58[i]);
}
// forEach 메서드는 희소 배열의 존재하지 않는 요소는 순회 대상에서 제외한다.
arr58.forEach((i) => console.log(i));

// 3) Array.prototype.map
const arr59 = [1, 4, 9];
// map 메서드는 arr59 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 변환값들로 구성된 새로운 배열을 반환한다.
const newArr59 = arr59.map((item) => item ** 2);
console.log(newArr59);

// 4) Array.prototype.filter
const arr60 = [1, 2, 3, 4, 5];
// filter 메서드는 arr60 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 arr60 배열에서 홀수인 요소만 필터링한다.(1은 true로 평가된다.)
const newArr60 = arr60.filter((item) => item % 2);
console.log(newArr60);

// 짝수인 요소만 필터링
const newArr600 = arr60.filter((item) => {
  if (item % 2 !== 1) {
    return true;
  }
});
console.log(newArr600);

// 5) Array.prototype.reduce
// 1부터 4까지 누적을 구한다.
const arr61 = [1, 2, 3, 4];
const sumResult61 = arr61.reduce(
  (accumulaotr, currentValue, index, array) => accumulaotr + currentValue,
  0
);
console.log(sumResult61);

// reduce 메서드의 다양한 활용
// 평균 구하기
const arr62 = [1, 2, 3, 4, 5, 6];
const result62 = arr62.reduce((acc, cur, i, array) => {
  return i !== array.length - 1 ? acc + cur : (acc + cur) / array.length;
}, 0);
console.log(result62);

// 최대값 구하기
const arr63 = [1, 2, 3, 90, 4, 5, 6];
const result63 = arr63.reduce((acc, cur, i, array) => {
  return acc > cur ? acc : cur;
}, 0);
console.log(result63);
// 최대값을 구할 때는 reduce 메서드보다 Math.max 메서드를 사용하는 방법이 더 직관적이다.
const max = Math.max(...arr63);
console.log(max);

// 요소의 중복 횟수 구하기
const arr64 = ["banana", "apple", "orange", "orange", "apple"];
const result64 = arr64.reduce((acc, cur, i, arr) => {
  // 첫 번째 순회 시 acc는 초기값인 {}이고 cur은 첫 번째 요소인 "banana"다.
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다.
  // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(result64);
console.log(arr64);

// 중첩 배열 평탄화
const arr65 = [1, [2, 3], 4, [5, 6]];
const result65 = arr65.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);
console.log(result65);
console.log(arr65);

// 중복 요소 제거
const arr66 = [1, 2, 1, 3, 4, 4, 5, 3, 4, 4];
const result66 = arr66.reduce((acc, cur, i, arr) => {
  // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다.
  // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
  // 순회 중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복된 요소다.
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);
console.log(result66);

// 중복 요소를 제거할 때는 reduce 메서드보다 filter 메서드를 사용하는 방법이 더 직관적이다!
const arr67 = [1, 2, 1, 3, 4, 4, 5, 3, 4, 4];
// 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다. 이 요소만 필터링한다.
const result67 = arr67.filter(
  (item, index, arr) => arr.indexOf(item) === index
);
console.log(result67);

// 또는 중복되지 않는 유일한 값들의 집합인 Set을 사용할 수 있다.(추천!)
const arr68 = [1, 2, 1, 3, 4, 4, 5, 3, 4, 4];
// 중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const result68 = [...new Set(arr68)];
console.log(result68);

// reduce 메서드의 두 번재 인수는 생략하지 않는 것이 좋다!
const arr69 = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];
const result69 = arr69.reduce((acc, cur, i, arr) => acc + cur.price, 0);
console.log(result69);

// 6) Array.prototype.some
// 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
const arr70 = [1, 5, 13];
const result70 = arr70.some((item) => item > 10);
console.log(result70);

// 배열의 요소 중 1보다 작은 요소가 1개 이상 존재하는지 확인
const result700 = arr70.some((item) => item < 1);
console.log(result700);

// 배열의 요소 중 "banana"가 1개 이상 존재하는지 확인
const arr71 = ["apple", "banana", "mango"];
const result71 = arr71.some((item) => item === "banana");
console.log(result71);

// some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환한다.
const arr72 = [];
const result72 = arr72.some((itme) => itme > 2);
console.log(result72);

// 7) Array.prototype.every
// 배열의 모든 요소가 3보다 큰지 확인
const arr73 = [4, 5, 7];
const arr74 = [1, 4, 6];
const result73 = arr73.every((item) => item > 3);
const result74 = arr74.every((item) => item > 3);
console.log(result73, result74);

// every 메서드를 호출한 배열이 빈 배열인 경우 언제가 true를 반환한다.
const result722 = arr73.every((item) => item > 2);
console.log(result722);

// 8) Array.prototype.find
// 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다.
const arr75 = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Woo" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Han" },
];
// id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다.
const result75 = arr75.find((item) => item.id === 2);
console.log(result75);

// 9) Array.prototype.findIndex
const arr76 = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Woo" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Han" },
];
// id가 2인 요소의 인덱스를 구한다.
const result76 = arr76.findIndex((item) => item.id === 2);
console.log(result76);

// name이 "Han"인 요소의 인덱스를 구한다.
const result766 = arr76.findIndex((item) => item.name === "Han");
const result7666 = arr76.find((item) => item.name === "Han");
console.log(result766, result7666);

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화 할 수 있다.
function predicate(key, value) {
  return (item) => item[key] === value;
}

console.log(arr76.findIndex(predicate("id", 3)));

// 10) Array.prototype.flatMap
