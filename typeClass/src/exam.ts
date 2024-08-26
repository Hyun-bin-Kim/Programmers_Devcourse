// 문제 1
type Name = string
const firstName: Name = 'Kim';
const lastName: Name = 'hyunbin';

// 문제2
type MathO = (a:number, b:number) => number;
const add2: MathO = (x, y) => x + y;
const multiply: MathO = (x, y) => x * y;

//문제 3
interface Shape{
    color: string;
}
interface Circle extends Shape{
    radius : number;
}
const circle = {
    color: 'red',
    radius: 2,
}

// 문제 4
interface Animal {
    name: string,
    age: number
}
interface Dog extends Animal {
    breed: string;
}
const dog: Dog = {
    name: 'winter',
    age: 3,
    breed: 'breed'
}

// 문제 5
interface Product {
    name: string,
    price: number,
    description?: string,
}
const product1: Product = {
    name: 'a',
    price: 3000,
}
const product2: Product = {
    name: 'b',
    price: 6000,
    description: 'bb'
}

// 문제 6
interface Dictionary {
    [key: string]: string,
}
const dictionary: Dictionary = {
    a: 'b'
}
dictionary['aaa'] = 'bbb'

// 문제 7
function firstEl<T>(arr:T[]): T {
    return arr[0]
}

// 문제 8
function Length<T extends {length: number}>(item: T){
    console.log(item.length)
}
Length('hello');

// 문제 10
function numBig<T>(a: T, b: T): T{
    return a > b ? a : b
}
console.log(numBig(10, 20))

function Max<T extends number>(a: T, b: T): T {
    return a > b ? a : b;
}

console.log(Max(10, 100))

// 문제 11
type IsString<T> = T extends string ? true : false
type Test1 = IsString<string>;
type Test2 = IsString<number>;

// 문제 12
type StringS<T> = T extends string ? T : never;
type Test3 = StringS<string | boolean | number>;

// 문제 13

function removeD <T> (arr: T[]): T[] {
    return Array.from(new Set(arr));
}

// 문제 14

function returnLen(param: any[]): number;
function returnLen(param: string): number;
function returnLen(param: any): number {
    return param.length;
}

returnLen('123123');
// 문제 15

type FirstElement <T> = T extends [infer U, ... any[]] ? U : never;
type Tuple1 = [string, number, boolean];

type FirstOne = FirstElement <Tuple1>;

// 문제 17

class Animal2 {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

class Dogs extends Animal2 {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age),
        this.breed = breed;
    }

    bark(): string {
        return 'Woof!';
    }
}

const myCat = new Dogs('땅콩이', 3, '고양이');