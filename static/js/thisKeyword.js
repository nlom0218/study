// 22장 this
// 1. this 키워드
// 객체 리터럴 방식으로 생성한 객체의 경우
console.log("1. this 키워드");
const circle = {
  // 프로퍼티: 객체 고유의 상태
  radius: 5,
  // 메서드: 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    // 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
    return 2 * circle.radius;
  },
};
console.log(circle.getDiameter());

// 생성자 함수 방식으로 인스턴스를 생성하는 경우
function Circle(radius) {
  // 이 시점에서 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이 시점에서는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  return 2 * this.radius;
};
// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle2 = new Circle(5);
console.log(circle2.getDiameter());

// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // 콘솔에서 실행하면 Window가 나타난다.

function square(num) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this);
  return num * num;
}

const person = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this);
    return this.name;
  },
};
console.log(person.getName());

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person {name:"Lee"}
}
const me = new Person("Lee");

// 2. 함수 호출 방식과 this 바인딩
// 1) 일반 함수 호출
// function foo() {
//   console.log("foo's this: ", this);
//   function bar() {
//     console.log("bar's this: ", this);
//   }
//   bar();
// }
// foo();

// strict mode가 적용된 일반 함수 내부의 this는 undefined가 바인딩된다.
function foo() {
  //"use strict";

  console.log("foo's this: ", this);
  function bar() {
    console.log("bar's this: ", this);
  }
  bar();
}
foo();

// 메서드 내에서 정의된 중첩 함수도 일반 함수로 호출되면
// 중첩 함수 내부의 this에는 전역 개체가 바인딩된다.
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;
// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // { value: 100, foo: [Function: foo] }
    console.log("foo's this.value: ", this.value); // 100
    // 메서드 내에서 정의한 중첩 함수
    function barr() {
      console.log("barr's this.value: ", this.value);
    }
    barr();
  },
};
obj.foo();

var value2 = 1;
const obj2 = {
  value2: 100,
  foo() {
    console.log("foo's this: ", this);
    console.log("foo's this.value2: ", this.value2);
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      //console.log("callback's this: ", this); // window
      console.log("callback's this.value2: ", this.value2); // 1
    }, 100);
  },
};
obj2.foo();

// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this바인딩과 일치시키기 위한 방법
var value3 = 1;
const obj3 = {
  value3: 100,
  foo() {
    // this 바인딩(obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value3);
    }, 100);
  },
};
obj3.foo();

// 2) 메서드 호출
const person3 = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.
    return this.name;
  },
};
// 메서드 getName을 호출한 객체는 person이다.
console.log(person3.getName());

const anotherPerson = {
  name: "Kim",
};
// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person3.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // Kim

// getName 메서드를 변수에 할당
const getName = person3.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName());
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
// 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ""이다.
// Node.js 환셩에서 this.name은 undefined이다.

function Person4(name) {
  this.name = name;
}
Person4.prototype.getName = function () {
  return this.name;
};
const me4 = new Person4("Lee");
// getName 메서드를 호출한 객체는 me다.
console.log(me4.getName());

Person4.prototype.name = "Kim";

// getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person4.prototype.getName());

// 3) 생성자 함수 호출
// 생성자 함수
function Circle3(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle3 객체를 생성
const circle3 = new Circle3(5);
// 반지름이 10인 Circle3 객체를 생성
const circle4 = new Circle3(10);

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());
