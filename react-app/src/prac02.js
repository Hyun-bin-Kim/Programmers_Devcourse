const fruits = [
    {name: "apple", quality: 2, price: 1000},
    {name: "banana", quality: 3, price: 2500},
    {name: "orange", quality: 5, price: 5000},
];

const result = fruits.find((fruit) => fruit.name === "banana");

document.write(
    `이름: ${result.name}<br> 수량: ${result.quality}<br> 가격: ${result.price}`
);
console.log(result);