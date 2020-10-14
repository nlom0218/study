var name = "Woo";

var person = {
  name: "Kim",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};
console.log(person);
console.log(person.sayHello());

//프로퍼티
console.log("프로퍼티");
var person1 = {
  name: "Kim",
  name: "Woo", // 키가 중가 중복 선언되면 나중에 선언한 프로퍼티가 덮어쓴다
  //age-bih: 25, // 식별자 네이밍 규칙을 지키 않으면 에러가 발생한다
  age: 27,
};
console.log(person1);

// 메서드
console.log("메서드");
var circle = {
  radius: 5, // <- 프로퍼티

  //원의 지름
  getDiameter: function () {
    // <- 메서드
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());

// 프로퍼티 값 갱신
console.log("프로퍼티 값 갱신");
person.name = "Lee";
console.log(person);
console.log(person.name);

// 프로퍼티 동적 생성
console.log("프로퍼티 동적 생성");
person.age = 27;
console.log(person);

// 프로퍼티 삭제
console.log("프로퍼티 삭제");
delete person.age;
console.log(person);

// ES6에서의 프로퍼티 축약 표현
console.log("ES6에서의 프로퍼티 축약 표현");
const x = 1;
const y = 2;
const obj = {
  x,
  y,
};
console.log(obj);
