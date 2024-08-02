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

const person = {
    name: 'Kim',
    age: '28'
}
const {name: userName, age: userAge} = person;

console.log(`이름: ${userName}, 나이: ${userAge}`)