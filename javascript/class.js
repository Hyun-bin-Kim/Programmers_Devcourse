// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype = {
//     toString: function () {
//         return `(${this.x}, ${this.y})`;
//     }
// }
// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1, toString());
// console.log(pt2, toString());
// console.log(pt1 instanceof Point);

// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI * this.radius **2;
//     }
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius **2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// class Person {
//     // 생성자
//     constructor(name) {
//         this.name = name;
//     }
//     // 프로토타입
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
//     // 정적메서드
//     static sayHello() {
//         console.log('Hello');
//     }
// }
// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello();

// const Person = (function(){
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHi = function() {
//         console.log('Hi! ' + this.name);
//     };
//     Person.sayHello = function() {
//         console.log('Hello!');
//     };
//     return Person;
// }());
// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// class Square {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     static areas(width, height) {
//         return width * height;
//     }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20, 10));

// const Person = {
//     firstName: 'Minji',
//     lastName: 'Choi',

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name){
//         [this.firstName, this.lastName] = name.split('');
//     }
// }
// console.log(Person.fullName);

// class Person {
//     #name = '';
//     constructor(name) {
//         this.#name = name
//     }
//     get name() {
//         return this.#name.trim();
//     }
// }
// const me = new Person('Lee');
// console.log(me.name);

// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name;
//         this.wheel = wheel;
//     }
// }
// const myVehicle = new Vehicle('자전거', 2)
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('따릉이', 2)
// console.log(myBicycle);

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel, license)
//         this.license = license;
//     }
// }
// const myCar = new Car('람보르기니', 4, true);
// console.log(myCar);

// class Base {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi() {
//         return `Hi ${this.name}. How have you been?`
//     }
// }
// class Derived extends Base {
//     sayHi() {
//         return `${super.sayHi()}`
//     }
// }
// const derived = new Derived('Lee');
// console.log(derived.sayHi());

// const Book = (function(){
//     function Book(title, author, price) {
//         this.title = title,
//         this.author = author,
//         this.price = price;
//     }
//     Book.prototype.date = function() {
//         console.log('date : 출판일');
//     };
//     Book.prototype.page = function() {
//         console.log('page : 페이지 수');
//     };
//     return Book;
// }());
// const book = new Book('타이틀', '작가','가격');
// console.log(book);
// book.date();
// book.page();

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     textIntroduce() {
//         return `안녕하세요 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`
//     }
// }
// const person1 = new Person('김현빈', 28);
// console.log(person1.textIntroduce());

class Calculator{
    static add(a, b){
        return a + b;
    }   
    static substract(a, b){
        return a - b;
    }
}
console.log(Calculator.add(1, 3))
console.log(Calculator.substract(1, 3))

function Calculator () {}

Calculator.add = function(a, b){
    return a + b;
}
Calculator.substract = function(a, b){
    return a - b;
}
console.log(Calculator.add(2, 5))
console.log(Calculator.substract(2, 5))
