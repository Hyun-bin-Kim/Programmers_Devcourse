import logo from './logo.svg';
import './App.css';
import TodaysPlan from './components/TodaysPlan';
import BodyComponent from './components/BodyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FirstProps from './components/FirstProps';
import Wrapper from './components/Wrapper';
import MovieComponent from './components/MovieComponent';
import FoodMenu from './components/FoodMenu';
import DefaultProps from './components/DefaultProps';
import IntroductionComponents from './components/IntroductionComponents';
import ChildComponent from './components/ChildComponent';
import PropTypesComponents from './components/ProTypesComponents';
import TodoTask from './components/TodoTask';
import MoneyList from './components/MoneyList';
import ChangeProps from './components/ChangeProps';
import { useState } from 'react';
import UserID from './components/UserID';
import UserPW from './components/UserPW';

function App() {
  const name = 'HyunBin'
  const style = {
    backgroundColor: 'red',
    fontSize: '12px'
  }

  const movieList = [
    {
      title: "행복의 나라",
      open: "2024.08.14",
      poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88454/88454_1000.jpg"
    },
    {
      title: "에이리언-로물루스",
      open: "2024.08.14",
      poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_1000.jpg"
    },
    {
      title: "트위스터스",
      open: "2024.08.14",
      poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_1000.jpg"
    }
  ];

  const todoList = [
    {taskName: '빨래하기', finished: false},
    {taskName: '공부하기', finished: false}
  ];
  
  const moneyList = [1000, 2000, 1000, 4000];

  const names = ['HTML', 'CSS', 'Javascript', 'React'];
  const nameList = names.map((name,index) => {return <li key={index}>{name}</li>})
  
  // const [1, 2] = useState(초기값)
  // 초기값 : 숫자, 문자열, 객체, 배열, 함수
  const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "리액트"]);
  // font, setFont
  // name, setName
  const [font, setFont] = useState("50px")
  const fontStyle = {
    // 키(카멜케이스) : 값
    fontSize : font
  }

  const [value, setValue] = useState("안녕하세요");
  function printConsole() {
    console.log(value)
    setValue('반가워요')
  } 

  const [number, setNumber] = useState(0);
  function upCounter() {
    setNumber(number + 1);
  }
  function resetCounter() {
    setNumber(0)
  }

  const [hello, status] = useState("안녕하세요");
  function login() {
    status("로그인되었습니다")
  }
  function logout() {
    status("로그아웃되었습니다")
  }

  const person1 = {name: 'hyunbin'};
  const person2 = {...person1, age: 20};
  const person3 = {...person2, region: 'seoul'}
  const person4 = {region: 'busan', ...person3}

  const object1 = {a:1, b:2};
  const object2 = {a:1, b:2};
  console.log(object1 === object2)

  const [msg, setMsg] = useState(["안녕", "하이"])
  function changMsg() {
    const newMsg = [...msg]
    newMsg[1] = "Hello";
    setMsg(newMsg)
  }

  const [childMsg, setChildMsg] = useState("");
  function addDataHandler(data){
    setChildMsg(data)
  }

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  function addIdHandler(id){
    setId(id)
  }
  function addPwHandler(pw){
    setPw(pw)
  }
  function loginCheck(){
    if(id==="hyunbin" && pw ==="1234"){
      alert("로그인 성공")
    }else if(id !== "hyunbin" && pw !=="17234"){
      alert("로그인 실패")
    }else if(id !== "hyunbin"){
      alert("아이디가 일치하지 않습니다.")
    }else{
      alert("비밀번호가 일치하지 않습니다.")
    }
  }

  // 문제 1
  const [numbers, setNumbers] = useState([5, 10, 15, 20, 25, 30]);
  function remove(){
    const newNumbers = [...numbers];
    newNumbers.forEach((number, index) => {
      if(number % 2 === 0 ){
        newNumbers.splice(index, 1);
      }
    });
    setNumbers(newNumbers);
  }

  // 문제 2
  const fruits = [
    { name: 'apple', quantity: 2, price: 1000 },
    { name: 'banana', quantity: 3, price: 2500 },
    { name: 'orange', quantity: 5, price: 5000 }
  ];
  const searchName = 'banana';
  const foundFruit = fruits.find(fruit => fruit.name === searchName);
  
  // 문제 3
  const array = ["javascript", "css", "react", "html"];
  const findLongWords = () => {
    const longWords = array.filter(word => word.length >= 5);
    const result = longWords.map(word => `${word} : ${word.length}`).join('\n');
    return result;
  };
  const result = findLongWords();

  return (
    // <div style={style}>
      
    // {/* 주석 입니다. */}
    //   <div>안녕하세요</div>
    //   <div>{name}</div>
    // </div>

    // <>
    //   <TodaysPlan/>
    //   <HeaderComponent/>
    //   <BodyComponent/>
    //   <FooterComponent/>
    // </>

    // <FirstProps name="김현빈" color="blue"/>

    // <Wrapper>
    //   <HeaderComponent/>
    //   <BodyComponent/>
    //   <FooterComponent/>
    // </Wrapper>

    // <>
    //   <FoodMenu
    //     img="https://images.unsplash.com/photo-1627207644206-a2040d60ecad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="pasta"
    //     type="pasta"
    //     name="Carbonara"
    //     price="15,000"
    //   />
    //   <FoodMenu
    //     img="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="pizza"
    //     type="pizza"
    //     name="Margherita"
    //     price="25,000"
    //   />
    //   <FoodMenu
    //     img="https://plus.unsplash.com/premium_photo-1723874465750-870e02eca9d4?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="stack"
    //     type="stack"
    //     name="Rib Eye Steak"
    //     price="50,000"
    //   />
    // </>

    // <>
    //   <DefaultProps name="김현빈" />
    //   <DefaultProps />
    // </>

    // <IntroductionComponents
    //   age={20}
    //   address="서울"
    //   nameColor="blue"
    //   ageColor="red"
    //   addrColor="yellow" />

    // <ChildComponent>리액트</ChildComponent>

    // <>
    //   <PropTypesComponents item={3} price={1000}/>
    // </>

    // <div>
    //   <MovieComponent title="행복의 나라" open="2024.08.14"/>
    //   <MovieComponent title="에이리언-로물루스" open="2024.08.14"/>
    //   <MovieComponent title="트위스터스" open="2024.08.14"/>
    // </div>

    // <>
    // {
    //   movieList.map(movie =>
    //     <MovieComponent title={movie.title} open={movie.open} poster={movie.poster}/>)
    // }
    // </>

    // <> 
    //   {
    //   todoList.map((todo, index) => 
    //     ( < TodoTask taskName={todo.taskName} key={index}/> 

    //     ))} 
    // </>

    // <>
    // <h2>가격목록</h2>
    //   {
    //     moneyList.map((money, index) => (
    //     < MoneyList moneys={money} key={index}/>
    //   ))}
    // </>

    // <div>
    //         <ul>{nameList}</ul>
    // </div>

    // <>
    //   <ChangeProps name="Hyunbin" changeName="React"/>
    // </>

    // <>
    //   <h1 style={fontStyle}>{인사[0]}</h1>
    //   <h1 style={fontStyle}>{인사[1]}</h1>
    //   <h1 style={fontStyle}>{인사[2]}</h1>
    //   <h1 style={fontStyle}>{font}</h1>
    // </>

    // <>
    //   <h1>{value}</h1>
    //   <button onClick={printConsole}>클릭</button>
    // </>

    // <>
    //   <h1>{number}</h1>
    //   <button onClick={upCounter} onMouseOut={resetCounter}>클릭</button>
    // </>

    // <>
    //   <h1>{hello}</h1>
    //   <button onClick={login}>로그인</button>
    //   <button onClick={logout}>로그아웃</button>
    // </>

    // <div>
    //   <h1>{JSON.stringify(person1)}</h1>
    //   <h1>{JSON.stringify(person2)}</h1>
    //   <h1>{JSON.stringify(person3)}</h1>
    //   <h1>{JSON.stringify(person4)}</h1>
    // </div>

    // <>
    //   <h1>{msg[0]}</h1>
    //   <h1>{msg[1]}</h1>
    //   <button onClick={changMsg}>배열 값 변경</button>
    // </>

    // <>
    //   <h2>ChildComponent로부터 전달 받은 데이터: {childMsg}</h2>
    //   <ChildComponent onAddData={addDataHandler}/>
    // </>

    // <>
    //   <UserID onAddId={addIdHandler}/>
    //   <UserPW onAddPw={addPwHandler}/>
    //   <button onClick={loginCheck}>Login</button> 
    // </>

    // 문제 1
    // <div>
    //   <h2>배열의 남은 요소 : {numbers.map((number, index) => (<h4 key={index}>{number}</h4>))}</h2>
    //   <button onClick={remove}>Remove Even Numbers</button>
    // </div>

    // 문제 2
    // <div>
    //         <h3><strong>이름:</strong> {foundFruit.name}</h3>
    //         <h3><strong>수량:</strong> {foundFruit.quantity}</h3>
    //         <h3><strong>가격:</strong> {foundFruit.price}</h3>
    // </div>

    // 문제 3
    <div>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
