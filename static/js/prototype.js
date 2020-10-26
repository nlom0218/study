// 프로토타입

// 객체지향 프로그래밍
console.log(`1. 😉객체지향 프로그래밍😉`);
// 이름과 주소 속성을 갖는 객체
const person = {
  name: "Lee",
  address: "Seoul",
};
console.log(person);

// 원
const circle = {
  radius: 5, // 반지금 - 원의 상태를 나타내는 데이터 - property

  // 원의 지름 - 동작 - method
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레 - 동작 - method
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이 - 동작 - method
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle);
console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

// 상속과 프로토타입
console.log(`2. 😉상속과 프로토타입😉`);
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());

// 3. __proto__ 접근자 프로터피
console.log(`3. 😉__proto__ 접근자 프로터피😉`);
const obj = {};
const parent = { x: 1 };
// obj 객체의 프로토타입 취득
Object.getPrototypeOf(obj); // = obj.__proto__;
// obj 객체의 프로토타입 교체
Object.setPrototypeOf(obj, parent); // = obj.__proto__ = parent;

console.log(obj.__proto__);
console.log(obj.x);

// 4. 함수 객체의 prototype 프로퍼티
console.log(`4. 😉함수 객체의 prototype 프로퍼티😉`);
// 생성자 함수
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);

// 5. 객체 생성 방식과 프로토타입의 결정
console.log(`5. 😉객체 생성 방식과 프로토타입의 결정😉`);
// 객체 리터럴에 의해 생성된 객체의 프로토타입
const a = { x: 1 };
console.log(a.constructor === Object);
console.log(a.hasOwnProperty("x"));

// Object 생성자 함수에 의해 생성된 객체의 프로토타입
const b = new Object();
console.log(b);
b.x = 1;
console.log(b);
console.log(b.constructor === Object);
console.log(b.hasOwnProperty("x"));

// 생성자 함수에 의해 생성된 객체의 프로토타입
function Person1(name) {
  this.name = name;
}
// 프로토타입 메서드
Person1.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`);
};

const me1 = new Person1("Lee");
const you = new Person1("Kim");

me1.sayHello(); // Hi my name is Lee
you.sayHello(); // Hi my name is Kim

// 6. 프로토타입 체인
console.log(`6. 😉프로토타입 체인😉`);
function Person2(name) {
  this.name = name;
}
// 프로토타입 메서드
Person2.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`);
};

const me2 = new Person2("Woo");
console.log(me2);

// hasOwnProperty는 Object.prototype의 매서드다.
console.log(me.hasOwnProperty("name"));
// me객체는 프로토타입 체인에 따라 hasWonProperty 메서드를 검색하여 사용한다.

// 7. instanceof 연산자
console.log(`7. 😉instanceof 연산자😉`);
// 생성자 함수
function Person3(name) {
  this.name = name;
}
const me3 = new Person3("Lee");
// Person3.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가된다.
console.log(me3 instanceof Person3);

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me3 instanceof Object);

// 8. in 연산자 & Reflect.has 메서드
console.log(`8. 😉in 연산자 & Reflect.has 메서드😉`);
const person1 = {
  name: "Kim",
  address: "Seoul",
};
// person1 객체에 name 프로퍼티가 존재한다.
console.log("name" in person1);
// person1 객체에 address 프로퍼티가 존재한다.
console.log("address" in person1);
// person1 객체에 age 프로퍼티가 존재하지 않는다..
console.log("age" in person1);
// person1 객체가 속한 프로토타입 체인 상의 존재하는 모든 프로토타입에서
// toString프로퍼티를 검색한다. toString은 Object.prototpye의 메서드다.
console.log("toString" in person1);

// in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수 있다.
const person2 = { name: "Lee" };
console.log(Reflect.has(person, "name"));
console.log(Reflect.has(person, "toString"));

// 9. 프로퍼티 열거
console.log(`9. 😉프로퍼티 열거😉`);
const person3 = {
  name: "Lee",
  address: "Seoul",
};
// for...in 문의 변수 prop에 person3 객체의 프로퍼티 키가 할당된다.
for (const key in person3) {
  console.log(key + ": " + person3[key]);
}

// 배열에서는 for...in 문을 사용하지 말고 일반적인 for문이나 for...of문 또는 Array.prototype.forEach 메서드 사용
const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
  // 프로퍼티 x도 출력된다.
  console.log(arr[i]);
}

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach((v) => console.log(v));

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
  console.log(value);
}
