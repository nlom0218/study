// 생성자 함수에 의한 객체 생성
// 1. Object 생성자 함수
const person = new Object(); // 빈 객체의 생성
person.name = "Kim";
person.sayHello = function () {
  console.log(`My name is ${this.name}`);
};
console.log(person);
person.sayHello();
// Object 생성자 함수를 사용해 객체를 생성하는 방식은 특별한 이유가 없다면 유용해 보이지 않는다.

// 그 외 다양한 생성자 함수
const strObj = new String("Woo");
console.log(strObj);
const numObj = new Number(123);
console.log(numObj);
const boolObj = new Boolean(true);
console.log(boolObj);
const func = new Function("x", "return x * x");
console.log(func);
const arr = new Array(1, 2, 3);
console.log(arr);
const date = new Date();
console.log(date);

// 2. 객체 리터럴에 의한 객체 생성 방식의 문제점
const circle1 = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};
console.log(circle1.getDiameter());

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
console.log(circle2.getDiameter());
// 프로퍼티 또는 메서드(위의 경우 getDiameter 메서드)가 동일함에도 불구하고 같은 프로퍼티와 메서드를 기술

// 3. 생성자 함수에 의한 객체 생성 방식의 장점
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

// 4. 생성자 함수의 인스턴스 생성 과정
function Circle1(radius) {
  // 1) 인스턴스 생성과 this 바인딩
  // 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this);

  // 2) this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3) 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성. Circle1 생성자 함수는 암묵적으로 this를 반환한다.
const circle5 = new Circle1(1);
console.log(circle5);

// 5. 내부 메서드 [[Call]]과 [[Construct]]
function foo() {} // 함수는 객체다.
foo.prop = 10; // 함수는 객체이기 때문에 프로퍼티를 가진다.
foo.method = function () {
  // 함수는 객체이기 때문에 메서드를 가진다.
  console.log(this.prop);
};
foo.method();
console.log(new foo());

// new 연산자
// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
  return x + y;
}
// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();
// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 반환된다.
console.log(inst);

// 객체를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}
// 일반 함수 new 연산자와 함께 호출
inst = new createUser("Lee", "admin");
// 함수가 생성한 객체르 반환한다.
console.log(inst);
