// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {
//     div.outerHTML = "<h1>DOM API</h1><p>선수 조건 : 없음</p>"

// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red'});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elems => {elems.style.color = 'tomato'});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(apple => {apple.style.color = 'skyblue'});

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() {
//     // if(boxEl.classList.contains('active')){
//     //     boxEl.classList.remove('active');
//     // }else{
//     //     boxEl.classList.add('active');
//     // }
//     console.log("Click!");
//     boxEl.classList.toggle('active')
// })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index){
//     boxEl.classList.add(`ordder-${index + 1}`);

// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('recult');

// div.addEventListener('click', (event) => {
//     result.innerHTML += '<div>click</div>'
// })
// div.addEventListener('mousedown', (event) => {
//     result.innerHTML += '<div>mousedwon</div>'
// })
// div.addEventListener('mouseup', (event) => {
//     result.innerHTML += '<div>mouseup</div>'
// })
// clearbtn.addEventListener('click', (event) => {
//     result.innerHTML="";s
// })

// function sayHi(name){
//     console.log(`Hi ${name}`)
// }

// const button = document.querySelector('button');

// button.addEventListener('click',function () {
//     console.log('button clicked 1')
// })
// button.addEventListener('click',function () {
//     console.log('button clicked 2')
// })

// const handleClick = () => console.log('buttonClick');
// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

// button.addEventListener('click', function add(){
//     console.log('click!')
//     button.removeEventListener('click', add);
// });;

// const handleClick = () => console.log('button click');
// button.onclick = handleClick;
// button.removeEventListener('click', handleClick);
// button.onclick = null;

// const msg = document.querySelector('.message');
// function showCoords(e){
//     msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`
// }
// document.onclick = showCoords;

// const fruits = document.getElementById('fruits');
// function activate({target}) {
//     if(!target.matches('#fruits > li')) return;
//     [...fruits.children].forEach(fruit => {
//         fruit.classList.toggle('active', fruit === target)
//     })
// }
// fruits.onclick = activate;
// document.getElementById('apple').onclickk = activate;
// document.getElementById('banana').onclickk = activate;
// document.getElementById('cherry').onclickk = activate;

// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         button.classList.toggle('active');
//     })
// })

const box = document.querySelector(".box");
// const initialMousePos = {x: 0, y: 0};
const offset = {x: 0, y: 0};

// const move = e => {
    
// };

document.addEventListener('click', e => {
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const newX = e.clientX - boxWidth / 2
    const newY = e.clientY - boxHeight / 2
    // initialMousePos.x = e.clientX - offset.x;
    // initialMousePos.y = e.clientY - offset.y;
    // offset.x = e.clientX - initialMousePos.x;
    // offset.y = e.clientY - initialMousePos.y;
    offset.x = newX;
    offset.y = newY;
    box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
    // document.addEventListener('mousemove', move);
});

// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move);
// })