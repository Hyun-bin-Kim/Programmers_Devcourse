// function foo(...rest){
//     console.log(rest);
// }
// foo(...[1,2,3])

// let arr3 = [1, 4];
// let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);

// arr3.splice(1, 0, ...arr4);
// console.log(arr3)

// const origin = [1, 2];
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// const obj = {x: 1, y: 2};
// const copy = {...obj};
// console.log(copy);
// console.log(obj === copy);

// const merged = {x: 1, y: 2, ...{a: 3, b: 4}};
// console.log(merged);

// const merged = Object.assign({}, {x: 1, y: 2}, {y: 10, x: 3});
// console.log(merged);

// const merged = {...{x: 1, y: 2}, ...{y:10, x: 3}};
// console.log(merged) 

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);

// const [a, b] = [1, 2];
// console.log(a, b);

// const [c, d] = [1];
// console.log(c, d);

// const user = {firstName: 'Hyunbin', lastName: 'Kim'};
// const {lastName, firstName} = user;
// console.log(lastName,firstName)

// function printTodo({content, completed}){
//     console.log(`할 일 ${content}은/는 ${completed ? '완료' : '미완료'}상태입니다.`)
// }
// printTodo({id: 1, content: "HTML", completed: "true"})

// const user = {
//     name: 'Lee',
//     address: {
//         zipCode: '03068',
//         city: 'Seoul'
//     }
// }
// const {address : {city}} = user;
// console.log(city)

// const person = {
//     name: 'Kim',
//     age: '28'
// }
// const {name: userName, age: userAge} = person;

// console.log(`이름: ${userName}, 나이: ${userAge}`)

// 문제 2
// const car = {brand: "현대", model: "아이오닉", year: 2023};
// const newCar = {...car, model: "전기차"};
// console.log(newCar);

// 문제 3
const array1 = [1, 2, 3, 4, 5]; 
const array2 = [4, 5, 6, 7, 8];
const array3 = [...array1, ...array2];
console.log(array3);
const array4 = [...new Set(array3)];
console.log(array4);

