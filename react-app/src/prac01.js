const numbers = useState([5, 10, 15, 20, 25, 30]);
  
numbers.forEach((item, index) => {
  if(item % 2 === 0) {
    console.log(item);
    numbers.splice(index,1);
  }
});

document.write(`배열의 남은 요소 : [${numbers}]`);