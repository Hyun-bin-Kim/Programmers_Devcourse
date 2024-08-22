// const add = function(a:number, b:number): number {
//     return a + b
// }

// const add2 = function(a:number, b:number): number {
//     return a + b
// }
// const result1 = add2(1, 2);

// const str = 'hello'
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: 'world'};

// let str = 'hello'
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: 'world'};

// let str: 'hello' = 'hello';
// str = 'world'

// const obj = {name: 'kim'};
// const arr = [1, 2, 'three'];

// obj.name = 'lee'
// arr.push(4);

// const arr1: string[] = ['1', '2', '3']
// const arr2: Array<number> = [1, 2, 3]

// const arr3 = [1, '3', 3];
// const arr4 = []

// const tuple: readonly[number, boolean, string] = [1, true, 'hello'];

// tuple.push('hello');
// console.log(tuple);

// const strNumBools : [string, number, ...boolean[]] = ['hello', 1, false, true, false]

// const[a, ...rest] = ['hello', 1, 2, 3];
// const[b, ...rest2]: [string, ...number[]] = ['hello', 1, 2, 3];

// function add(x: number, y:number) {
//     return x + y;
// }

// const str1: String = 'hello'
// const str2: string = str1

// function add(x:number, y:number){return x + y}
// const result1: add(1, 2) = add(1, 2);
// const result2: typeof add(1, 2) = add(1, 2);
// const add: typeof add = (x: number, y: number) => x + y

// let strNum: string | number = 'hello';
// strNum = 1;
// const arr = [1, '2', 3];

// function unionType(value: string | number): number {
//     if(typeof value === 'string'){
//         return parseInt(value);
//     }
//     return value;
// }
// unionType(1);
// unionType('1');

// const arr: string[] = [];

// const arr = [];
// arr.push('1');
// arr;
// arr.push(3);
// arr;

// const a: any = '123';
// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;

// fetch('url').then< {data: string} >((response) => {
//     return response.json();
// }).then((result) => {

// })
// const result: {hello: string} = JSON.parse('{"hello" : "json"}')

// try{

// }catch(e) {
//     const error = e as Error;
//     console.log(error.message);
// }

// const str: {} = 'hello';
// const num: {} = 123;
// const bool: {} = true;
// const obj: {} = {name: 'kim'};
// const arr: {} = [];
// const func: {} = () => {}; 
// const n: {} = null;
// const u: {} = undefined;
// obj.name;
// arr[0];

// function func1() {
//     throw new Error('error');
// }
// const return1 = func1();
// const func2 = () => {
//     throw new Error('error');
// }
// const result2 = func2();
// function infinity() {
//     while(true) {
//         console.log('반복')
//     }
// }
// function strNum(param: string | number) {
//     if(typeof param === 'string'){

// }else if (typeof param === "number"){

// }else {
//     param;
// }}

// type Person = {
//     name: string,
//     age: number,
//     married: boolean
// }
// const person2: Person = {
//     name: 'kim',
//     age: 28,
//     married: false
// }

// interface Person {
//     name: string,
//     age: number,
//     married: boolean
// }

// const person1: Person = {
//     name: 'kim',
//     age: 28,
//     married:false
// }

// interface Func {
//     (x: number, y:number): number;
// }

// const add: Func = (x, y) => x + y;

// interface Arr{
//     length: number,
//     [key: number]: string;
// }
// const arr = ['1', '2', '3']

// const obj = {}
// obj[123] = '숫자 키';
// console.log(obj);
// console.log(Object.keys(obj));

// interface NoProp {}
// const obj2: NoProp = {
//     txt: '에러 안남',
// }
// const result: NoProp = "안녕"
// const result2: NoProp = undefined;

// type Animal = {
//     name: string;
// }
// interface Bear extends Animal {
//     honey: boolean;
// }
// interface Tiger extends Animal {
//     stripe: boolean;
// }
// interface BearTiger extends Bear,Tiger{}

// type honey = BearTiger['honey']
// type stripe = BearTiger['stripe'];

// const bear1: Bear = {
//     name: 'bear',
//     honey: true
// }

// interface Merge{
//     one: string,
//     two: string,
// }
// interface Merge2 extends Merge {
//     one: 'h' | 'w';
//     two: '123'
// }

// namespace Exam {
//     export interface Inner {
//         test:string;
//     }
//     export type test2 = number;
// }
// const ex1:Exam.Inner = {
//     test: 'hello'
// }
// const ex2:Exam.test2 = 123;

// interface Exam {
//     hello: string;
//     world?: number;
//     readonly check: boolean;
//     readonly multiply?: symbol;
// }
// const example: Exam = {
//     hello: 'hi',
//     world: 123,
//     check: true,
// }
// example.first;
// example.check = false;

// const obj = {
//     hello: 'world',
//     name: 'Kim',
//     age: 28
// }
// type Keys = keyof typeof obj;
// type Values = typeof obj['hello' | 'age];

// type Arr = [1, 2, 3];
// type First = Arr[0];
// type Length = Arr['length'];
// type Arr2 = (string | boolean)[];
// type El = Arr2[number];

// type HelloHi = {
//     [key in 'hello' | 'hi']: string;
// }

// type Tuple = [1, 2, 3];
// type CopyTuple = {
//     [key in keyof Tuple]: Tuple[key];
// }
// const copyTuple: CopyTuple = [1, 2, 3];

// type Arr = number[];
// type CopyArr = {
//     [key in keyof Arr]: Arr[key];
// }
// const copyArr:CopyArr = [4, 3, 2];

// type A = string | boolean;
// type B = boolean | number;
// type C = A & B;
// type D = {} & (string | null);
// type F = unknown | {};
// type G = never | {};
// type H = {a: 'b'} & number;
// type I = null & {a: 'b'};
// type J = {} & string;

// let a: readonly string[] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'normal'];
// a = b;
// b = a;

// type Optional = {
//     a?: string;
//     b?: string;
// }
// type Essential = {
//     a: string;
//     b: string;
// }
// const o: Optional = {
//     a: 'hello',
// }
// const e: Essential = {
//     a: 'hello',
//     b: 'world',
// }
// const o2: Optional = e;
// const e2: Essential = o;

// interface Money {
//     _type: 'money';
//     amount: number;
//     unit: string;
// }

// interface Liter{
//     _type: 'liter';
//     amount: number;
//     unit: string;
// }
// const liter: Liter = {amount: 1, unit: 'liter', _type: 'liter'};
// const circle: Money = liter;

// interface Person<T, A>{
//     type: 'human',
//     race: 'yellow',
//     name: T,
//     age: A,
// }

// interface Kim extends Person<'kim', 20>{}
// interface Lee extends Person<'lee', 22>{}

// interface Array<T>{
//     [key: number]: T,
//     length:number,
// }
// const numbers: Array<number> = [1, 2, 3, 4]

// const personE = <N, A>(name: N, age: A) => ({
//     type: 'human',
//     race: 'yellow',
//     name,
//     age,
// })

// interface PersonI<N, A>{
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
// }

// type PersonT<N, A> = {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
// }

// type Kim = PersonI<'kim', 28>
// interface Lee extends PersonT<'lee', 22>{}

// class Person<N, A>{
//     name: N;
//     age: A;
//     constructor(name: N, age: A){
//         this.name = name;
//         this.age = age;
//     }
//     method<B>(param: B){}
// }

// interface PersonI<N, A> {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
//     method: <B>(param: B) => void
// }

// interface Person<N = string, A = number>{
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
// }
// type Person1 = Person
// type Person2 = Person<number>
// type Person3 = Person<number, boolean>

// interface Person<N = string, A = number>{
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
// }
// const personE = <N, A = unknown>(name:N, age:A): Person<N, A> => ({
//     type: 'human',
//     race: 'yellow',
//     name,
//     age,
// })

// const Kim = personE('kim', 28);

// function values<T>(initial: T[]){
//     return{
//         hasValue(value: T){
//             return initial.includes(value)
//         }
//     }
// }
// const savedValues = values(['a', 'b', 'c']);

// savedValues.hasValue('s');

// interface V0 {
//     value: any;
// }
// const f = (): V0 => {
//     return {value: 'test'}
// }

// type A1 = string;
// type B1 = A1 extends string ? number : boolean;

// type A2 = number;
// type B2 = A1 extends string ? number : boolean;

// interface X{
//     x: number;
// }
// interface XY{
//     x: number;
//     y: number;
// }
// interface YX extends X{    
//     y: number;
// }

// type A = XY extends X ? string : number;
// type B = YX extends X ? string : number;

// type result = [1] extends [string] ? true : false;

// type Start = string | number;
// type New = Start extends string | number ? Start[] : never;
// let n: New = ['hi'];
// n = [123];

// type New<A> = A extends string | number ? string[] : never;
// type Never = New<number>;
// type Arr = New<string>;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any{
    return a + b;
}

add("hello", "world");
add(1, 1);