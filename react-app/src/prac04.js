const numbers = [5, 19, 42, 36, 70];

const result = numbers.map((item) => item * 2);
console.log(result);

const newArr = result.map((item) => {
    if(item % 3 === 0) {
        item = item * 2;
    }
    return item;
});

document.write(`결과 : ${newArr}`);