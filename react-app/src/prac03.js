const array = ["javascript", "css", "react", "html"];

const result = array.find((item) => {
    if(item.length > 4){
        document.write(`${item} : ${item.length}<br>`);
    }
})