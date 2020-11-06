// 37장 Set과 Map

// 1. Set
// 1) Set 객체의 생성
const set1 = new Set();
console.log(set1);

const set2 = new Set([1, 2, 3, 3]);
console.log(set2);

const set3 = new Set("Hello L");
console.log(set3);

// 배열의 중복 요소 제거
const uniq3 = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq3([1, 3, 5, 2, 87, 2, 4, 5, 2]));
/*
1,0 / 0, 0
3,1 / 1, 1
5,2 / 2, 2
2,3 / 3, 3
87,4 / 4, 4
2,5 / 3, 5
4,6 / 6, 6
5,7 / 2, 7
2,8 / 3, 8
*/

// Set를 사용한 배열의 중복 요소 제거
const arr1 = [1, 2, 3, 3, 4, 5, 6, 6, 7];
const uniq2 = (array) => new Set(array);
const uniq = (array) => [...new Set(array)];
console.log(uniq2(arr1));
console.log(uniq(arr1));

console.log("---------------------------------------------");

// 2) 요소 개수 확인
const set4 = new Set([1, 2, 3, 3]);
console.log(set4);
console.log(set4.size);

const { size } = set4;
console.log(size);

console.log("---------------------------------------------");

// 3) 요소 추가
const set5 = new Set();
console.log(set5);

set5.add(1);
console.log(set5);

set5.add(2).add(3).add(1).add("Hi");
console.log(set5);

set5.add(NaN).add(NaN);
console.log(set5);

set5.add(0).add(-0);
console.log(set5);

set5.add({}).add([]).add(true);
console.log(set5);

console.log("---------------------------------------------");

// 4) 요소 존재 여부 확인
const set6 = new Set([1, 2, 3]);
console.log(set6);

console.log(set6.has(1));
console.log(set6.has(4));

// 5) 요소 삭제
const set7 = new Set([1, 2, 3]);
// 요소 2를 삭제한다.
set7.delete(2);
console.log(set7);

// 요소 1를 삭제한다.
set7.delete(1);
console.log(set7);

// 존재하지 않는 요소 4를 삭제하면 에러 없이 무시된다.
set7.delete(4);
console.log(set7);

console.log(set7.delete(6));

set7.add(1);
console.log(set7);

console.log(set7.delete(1));
console.log(set7);

console.log("---------------------------------------------");

// 6) 요소 일괄 삭제
// clear
const set8 = new Set([1, 2, 3]);
set8.clear();
console.log(set8);

console.log("---------------------------------------------");

// 7) 요소 순회
const set9 = new Set([1, 2, 3]);
set9.forEach((v, v1, self) => console.log(v, v1, self));

const set10 = new Set([1, 2, 3]);
console.log(set10);

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set10);

// 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const item of set10) {
  console.log(item);
}

// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set10]);

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, b, ...rest] = set10;
console.log(a, b, rest);

console.log("---------------------------------------------");

// 8) 집합 연산
// 교집합
Set.prototype.intersectoin = function (set) {
  const result = new Set();
  for (const value of set) {
    // 2의 set의 요소가 공통되는 요소이면 교집합의 대상이다.
    if (this.has(value)) result.add(value);
  }
  return result;
};
const set11 = new Set([2, 5, 1, 7, 3]);
const set12 = new Set([2, 5, 3, 9, 8]);

console.log(set11.intersectoin(set12));
console.log(set12.intersectoin(set11));

Set.prototype.intersectoin2 = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};
const set13 = new Set([1, 2, 3, 4]);
const set14 = new Set([2, 4]);

console.log(set13.intersectoin2(set14));

console.log("---------------------------------------------");

// 합집합
Set.prototype.union = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.add(value);
  }
  return result;
};
const set15 = new Set([1, 2, 3]);
const set16 = new Set([1, 3, 5, 6]);
console.log(set15.union(set16));
console.log(set16.union(set15));

Set.prototype.union2 = function (set) {
  return new Set([...this, ...set]);
};
const set17 = new Set([1, 2, 3, 4]);
const set18 = new Set([2, 4, 5, 7]);
console.log(set17.union2(set18));
console.log([...set17.union(set18)]);

console.log("---------------------------------------------");

// 차집합
Set.prototype.difference = function (set) {
  const result = new Set([...this]);
  for (const value of set) {
    result.delete(value);
  }
  return [...result];
};
const set19 = new Set([1, 2, 3, 4]);
const set20 = new Set([2, 3]);
console.log(set19.difference(set20));
console.log(set20.difference(set19));

Set.prototype.difference2 = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};
const set21 = new Set([1, 2, 3, 4]);
const set22 = new Set([2, 4]);
console.log(set21.difference2(set22));

console.log("---------------------------------------------");

// 부분 집합과 상위 집합
// this가 subset의 상위 집합인지 확인한다.
Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    if (this.has(value)) {
      return true;
    } else {
      return false;
    }
  }
};
const set23 = new Set([1, 2, 3, 4]);
const set24 = new Set([2, 4]);
console.log(set23.isSuperset(set24));
console.log(set24.isSuperset(set23));

Set.prototype.isSuperset2 = function (subset) {
  const superseArr = [...this];
  return [...this].every((v) => superseArr.includes(v));
};
console.log(set23.isSuperset2(set24));

console.log("---------------------------------------------");

// 2. Map
// 1) Map 객체의 생성
const map = new Map();
console.log(map);

const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value"],
]);
console.log(map1);

//const map2 = new Map([1, 2]);
// Iterator value 1 is not an entry object

// 중복된 키는 Map 객체에 요소로 저장되지 않는다.
const map3 = new Map([
  ["key1", "value1"],
  ["key1", "value2"],
]);
console.log(map3);

console.log("---------------------------------------------");

// 2) 요소 개수 확인
console.log(map1.size);

console.log("---------------------------------------------");

// 3) 요소 추가
// Map.prototype.set 메서드 사용
const map4 = new Map();
console.log(map4);

map4.set("key1", "value1");
console.log(map4);

map4.set("key2", "value2").set("name", "HongDong");
console.log(map4);

map4.set("Key2", "value3");
console.log(map4);

const map5 = new Map();
map5.set("key1", "value1").set("key1", "value2");
console.log(map5);

const map6 = new Map();
console.log(NaN === NaN);
console.log(0 === -0);

// NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
map6.set(NaN, "value1").set(NaN, "value2");
console.log(map6);

// +0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
map6.set(0, "value1").set(-0, "value2");
console.log(map6);

// Map 객체는 키 타입에 제한이 없다. 객체도 키로 사용할 수 있다.
const map7 = new Map();
const lee = { name: "Lee" };
const kim = { name: "Kim" };

map7.set(lee, "developer").set(kim, "designer");
console.log(map7);

console.log("---------------------------------------------");

// 4) 요소 취득
const map8 = new Map();
map8.set("key1", "value").set(lee, "developer").set(kim, "designer");
console.log(map8);
console.log(map8.get("key1"));
console.log(map8.get(lee));
console.log(map8.get("key2"));

console.log("---------------------------------------------");

// 5) 요소 존재 여부 확인
console.log(map8.has(kim));
console.log(map8.has("dsd"));

console.log("---------------------------------------------");

// 6) 요소 삭제
map8.delete(lee);
console.log(map8);
console.log(map8.delete(kim)); // delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환
console.log(map8);

console.log("---------------------------------------------");

// 7) 요소 일괄 삭제
console.log(map8.clear()); // clear 메서드는 언제나 undefined를 반환
console.log(map8);

console.log("---------------------------------------------");

// 8) 요소 순회
const map9 = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);
map9.forEach((v, k, map) => console.log(v, k, map));

console.log("---------------------------------------------");

// Map 객체는 이터러블이다. for...of문으로 순회 가능 및 스프레드 문법과 배열 디스트럭처링 할당의 대상 가능
// Map 객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in map9);

// 이터러블인 Map 객체는 for...of문으로 순회할 수 있다.
for (const entry of map9) {
  console.log(entry);
}

// 이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map9]);

// 이터러블인 Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [c, d] = map9;
console.log(c);

console.log("---------------------------------------------");
console.log(map9.keys());
console.log(map9.values());
console.log(map9.entries());

console.log("---------------------------------------------");

// Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
for (const key of map9.keys()) {
  console.log(key);
}

// Map.prototype.values는 Map 객체에서 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const value of map9.values()) {
  console.log(value);
}

// Map.prototype.entries는 Map 객체에서 요소키와 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const entry of map9.entries()) {
  console.log(entry);
}
