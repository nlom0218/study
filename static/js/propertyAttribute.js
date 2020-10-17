// 프로퍼티 어트리뷰트 & property descriptor & 데이터 프로퍼티
const person = {
  name: "Lee",
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));
person.age = 35;
console.log(Object.getOwnPropertyDescriptors(person));

// 접근자 프로퍼티
const person1 = {
  firstName: "HongDong",
  lastName: "Kim",
  //getter함수
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  },
  //setter함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(person1);
// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person1.lastName + " " + person1.firstName);
console.log(`${person1.lastName} ${person1.firstName}`);

// 접근자 프로퍼티를 통한 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person1.fullName = "Heegun Lee";
console.log(person1);

// 접근자 프로퍼티를 통한 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
console.log(person1.fullName);

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurabe]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person1, "firstName");
console.log(descriptor);

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurabe]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person1, "fullName");
console.log(descriptor);

// 프로퍼티 정의
const person3 = {};

// 1. 데이터 프로퍼티 정의
Object.defineProperty(person3, "firstName", {
  value: "HongDong",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(person3, "lastName", {
  value: "Kim",
  enumerable: true,
});

console.log(person3);

console.log(Object.getOwnPropertyDescriptor(person3, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person3, "lastName"));

console.log(Object.keys(person3)); // [[enumerable]] : false
person3.lastName = "Lee"; // [[Writable]] : false
delete person3.lastName; // [[Confiqurable]] : false

console.log(Object.getOwnPropertyDescriptor(person3, "lastName")); // 아뭓도 바뀌지 않았다,,

// 2. 접근자 프로퍼티 정의
Object.defineProperty(person3, "fullName", {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // getter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(person3, "fullName"));

person3.fullName = "Heegun Lee";
console.log(person3);

const person4 = {};
Object.defineProperties(person4, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: "HongDong",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "kim",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수 - 참조하는 함수
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수 - 저장하는 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});
person4.fullName = "Heegun Lee"; // setter 함수, 저장
console.log(person4);
console.log(person4.fullName); // getter 함수, 참조

// 불변 객체
const person5 = {
  name: "Lee",
  address: {
    city: "Seoul",
  },
};
//얕은 객체 동결
Object.freeze(person5);

//직속 프로퍼티만 동결
console.log(Object.isFrozen(person5));
console.log(Object.isFrozen(person5.address));

person5.address.city = "Busan";
console.log(person5);

function deepFreeze(target) {
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person6 = {
  name: "Lee",
  address: { city: "Seoul" },
};
//깊은 객체 동결
deepFreeze(person6);

console.log(Object.isFrozen(person6));
console.log(Object.isFrozen(person6.address));

person6.address.city = "Busan";
console.log(person6);
