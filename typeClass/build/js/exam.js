"use strict";
const firstName = 'Kim';
const lastName = 'hyunbin';
const add2 = (x, y) => x + y;
const multiply = (x, y) => x * y;
const circle = {
    color: 'red',
    radius: 2,
};
const dog = {
    name: 'winter',
    age: 3,
    breed: 'breed'
};
const product1 = {
    name: 'a',
    price: 3000,
};
const product2 = {
    name: 'b',
    price: 6000,
    description: 'bb'
};
const dictionary = {
    a: 'b'
};
dictionary['aaa'] = 'bbb';
// 문제 7
function firstEl(arr) {
    return arr[0];
}
// 문제 8
function Length(item) {
    console.log(item.length);
}
Length('hello');
// 문제 10
function numBig(a, b) {
    return a > b ? a : b;
}
console.log(numBig(10, 20));
function Max(a, b) {
    return a > b ? a : b;
}
console.log(Max(10, 100));
