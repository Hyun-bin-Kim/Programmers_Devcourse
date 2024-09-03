import logo from './logo.svg';
import './App.css';
import TodaysPlan from './components/TodaysPlan';
import BodyComponent from './components/BodyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FirstProps from './components/FirstProps';
import Wrapper from './components/Wrapper';
import MovieComponent from './MovieComponent';
import FoodMenu from './components/FoodMenu';
import DefaultProps from './components/DefaultProps';
import IntroductionComponents from './components/IntroductionComponents';
import ChildComponent from './components/ChildComponent';
import PropTypesComponents from './components/ProTypesComponents';
import TodoTask from './components/TodoTask';
import MoneyList from './components/MoneyList';
import ChangeProps from './components/ChangeProps';
import { useEffect, useState, useRef, useMemo } from 'react';
import UserID from './components/UserID';
import UserPW from './components/UserPW';
import CheckBox from './components/CheckBox';
import Submit from './components/Submit';
import ImageComponent from './components/ImageComponent';
import Prac07 from './components/Prac07';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './components/StyleComponent';
import FirstScssComponent from './components/FirstScssComponent'
import SecondScssComponent from './components/SecondScssComponent'
import ThirdScssComponent from './components/ThirdScssComponent'
import NestingComponent from './components/NestingComponent';
import ParentSelector from './components/ParentSelector';
import Operation from './components/Operation';
import Count from './components/Count';
import AddName from './components/AddName';
import Menu from './components/Menu';
import AddNamePerformance from './components/AddNamePerformance';
import AddNameUesEffect from './components/AddNameUseEffect';
import Prac02 from './components/Prac02';
import UseRefVSUseState from "./components/UseRefVSUseState";
import Prac03 from './components/Prac03';
import UseRefVSVariable from './components/UserRefVSVariable';
import Prac04 from './components/Prac04';
import UseRefDom from './components/UseRefDom';
import Prac05 from './components/Prac05';

function App() {
  // const name = 'HyunBin'
  // const style = {
  //   backgroundColor: 'red',
  //   fontSize: '12px'
  // }

  // const movieList = [
  //   {
  //     title: "행복의 나라",
  //     open: "2024.08.14",
  //     poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88454/88454_1000.jpg"
  //   },
  //   {
  //     title: "에이리언-로물루스",
  //     open: "2024.08.14",
  //     poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_1000.jpg"
  //   },
  //   {
  //     title: "트위스터스",
  //     open: "2024.08.14",
  //     poster: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_1000.jpg"
  //   }
  // ];

  // const todoList = [
  //   {taskName: '빨래하기', finished: false},
  //   {taskName: '공부하기', finished: false}
  // ];
  
  // const moneyList = [1000, 2000, 1000, 4000];

  // const names = ['HTML', 'CSS', 'Javascript', 'React'];
  // const nameList = names.map((name,index) => {return <li key={index}>{name}</li>})
  
  // // const [1, 2] = useState(초기값)
  // // 초기값 : 숫자, 문자열, 객체, 배열, 함수
  // const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "리액트"]);
  // // font, setFont
  // // name, setName
  // const [font, setFont] = useState("50px")
  // const fontStyle = {
  //   // 키(카멜케이스) : 값
  //   fontSize : font
  // }

  // const [value, setValue] = useState("안녕하세요");
  // function printConsole() {
  //   console.log(value)
  //   setValue('반가워요')
  // } 

  // const [number, setNumber] = useState(0);
  // function upCounter() {
  //   setNumber(number + 1);
  // }
  // function resetCounter() {
  //   setNumber(0)
  // }

  // const [hello, status] = useState("안녕하세요");
  // function login() {
  //   status("로그인되었습니다")
  // }
  // function logout() {
  //   status("로그아웃되었습니다")
  // }

  // const person1 = {name: 'hyunbin'};
  // const person2 = {...person1, age: 20};
  // const person3 = {...person2, region: 'seoul'}
  // const person4 = {region: 'busan', ...person3}

  // const object1 = {a:1, b:2};
  // const object2 = {a:1, b:2};
  // console.log(object1 === object2)

  // const [msg, setMsg] = useState(["안녕", "하이"])
  // function changMsg() {
  //   const newMsg = [...msg]
  //   newMsg[1] = "Hello";
  //   setMsg(newMsg)
  // }

  // const [childMsg, setChildMsg] = useState("");
  // function addDataHandler(data){
  //   setChildMsg(data)
  // }

  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");
  // function addIdHandler(id){
  //   setId(id)
  // }
  // function addPwHandler(pw){
  //   setPw(pw)
  // }
  // function loginCheck(){
  //   if(id==="hyunbin" && pw ==="1234"){
  //     alert("로그인 성공")
  //   }else if(id !== "hyunbin" && pw !=="17234"){
  //     alert("로그인 실패")
  //   }else if(id !== "hyunbin"){
  //     alert("아이디가 일치하지 않습니다.")
  //   }else{
  //     alert("비밀번호가 일치하지 않습니다.")
  //   }
  // }

  // const [v, setV] = useState("안녕하세요");
  // const [fonts,setFonts] = useState("50px");
  // function changeFont(size){
  //   setFonts(size)
  // }
  // const fontStyle1 = {
  //   fontSize : fonts
  // }

  // const [value1, setValue1] = useState("글자색 바꾸기");
  // const [color,setColor] = useState("black");
  // function setFontColor(color){
  //   setColor(color)
  // }
  // const fontStyle2 = {
  //   color : color
  // }

  // const [text, setText] = useState("");
  // function printConsole1(e){
  //   console.log(e.target.value)
  // }
  // function printBrowser(e){
  //   setText(e.target.value)
  // }

  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  // const [form, setForm] = useState({username : "", message : ""})
  // function onChangeHandler(e){
  //   const newForm = {...form, [e.target.name] : e.target.value}
  //   setForm(newForm);
  // }

  // const [message, setMessage] = useState({title: "제목", color: "black"});
  // function changeMessage(msg){
  //   const newMessage = {...message}
  //   newMessage.title = msg
  //   newMessage.color = "red"

  //   setMessage(newMessage)
  // }
  // function showMessage(){
  //   alert(message.title);
  // }

  // const productList = [
  //   {
  //     name: "모자",
  //     price: "10000"
  //   }, 
  //   {
  //     name: "신발",
  //     price: "30000"
  //   }, 
  //   {
  //     name: "가방",
  //     price: "80000"
  //   }
  // ];
  
  // const regionList = [
  //   {
  //     region: "서울",
  //     eng: "Seoul",
  //   },
  //   {
  //     region: "부산",
  //     eng: "Busan",
  //   },
  //   {
  //     region: "제주",
  //     eng: "Jeju",
  //   },
  // ];

  // const [count, setCount] = useState(0);
  // function onCounterHandler() {
  //   setCount((prev) => prev + 1);
  // }

  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   console.log("Before updating: ", count); // 0
  //   setCount(count + 1); // 상태 업데이트 요청 -> 15ms
  //   // 0
  // };

  // useEffect(() => {
  //   console.log("After updating: ", count); // count가 업데이트 될 때마다 실행
  // }, [count]);

  // const style = {
  //   margin: "30px",
  // };
  // const [name, setName] = useState("hyunbin");
  // const [age, setAge] = useState(10);

  // const nameRef = useRef()
  // const ageRef = useRef()

  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);
  //hardCalculator(hardNumber); //함수 실행
  const easySum = easyCalculator(easyNumber);

  function hardCalculator(number){
    // number = hardNumber
    // 어렵고 복잡하고 시간이 오래걸리는 작업
    for(let i = 0; i < 10; i++) {
      console.log(i)
    }
    return number + 10000;
  }
  function easyCalculator(number){
    console.log("쉬운 계산중")
    return number + 1;
  }

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

    // <div>
    //   <h1 style={fontStyle1}>{v}</h1>
    //   {/* <button onClick={()=>{changeFont('100px')}}>글자크기변경</button> */}
    //   <button onClick={()=>{setFonts('100px')}}>글자크기변경</button>
    // </div>

    // <div>
    //   <h1 style={fontStyle2}>{value1}</h1>
    //   <button onClick={()=>{setFontColor('red')}}>빨간색</button>
    //   <button onClick={()=>{setFontColor('green')}}>초록색</button>
    //   <button onClick={()=>{setFontColor('blue')}}>파란색</button>
    // </div>

    // <>
    //   <h1>{text}</h1>
    //   <input type='text' onChange={(e) => {console.log(e.target.value)}}></input>
    //   <input type='text' onChange={(e) => {setText(e.target.value)}}></input>
    // </>

    // <>
    //   <h1>사용자 이름 : {name}</h1>
    //   <h1>내용 : {message}</h1>
    //   <input type='text' name="username" onChange={(e) => {setName(e.target.value)}} />
    //   <input type='text' name="message" onChange={(e) => {setMessage(e.target.value)}} />
    // </>

    // <>
    //   <h1>사용자 이름 : {form.username}</h1>
    //   <h1>내용 : {form.message}</h1>
    //   <input type='text' name="username" onChange={onChangeHandler} />
    //   <input type='text' name="message" onChange={onChangeHandler} />
    // </>

    // <>
    //   <h1 style={{color : message.color}}>{message.title}</h1>
    //   <hr/>
    //   <input type='text' onChange={(e)=>{changeMessage(e.target.value)}} />
    //   <button onClick={showMessage}>출력</button>
    // </>

    // <>
    //   <CheckBox list={productList} />
    // </>

    // <>
    //   <Submit region={regionList}/>
    // </>

    // <>
    //   <ImageComponent />
    // </>

    // <>
    //   <div className='title'>
    //     <h1>Total Count : {count}</h1>
    //   </div>
    //   <div className='container'>
    //     <Prac07 onCount={onCounterHandler}/>
    //     <Prac07 onCount={onCounterHandler}/>
    //   </div>
    // </>

    // <div>
    //   <Button1 />
    //   <Button2 />
    // </div>

    // <>
    //   <StyledComponent />
    // </>

    // <>
    //   <FirstScssComponent />
    // </>

    // <>
    //   <SecondScssComponent />
    // </>

    // <>
    //   <ThirdScssComponent />
    // </>

    // <>
    //   <NestingComponent />
    // </>

    // <>
    //   <ParentSelector />
    // </>

    // <>
    //   <Operation />
    // </>

    // <div>
    //   <Count/>
    // </div>

    // <div>
    //   <AddName/>
    // </div>

    // <div>
    //   <Menu/>
    // </div>

    // <div>
    //   <AddNamePerformance/>
    // </div>

    // <div>
    //   <AddNameUesEffect/>
    // </div>

    // <div>
    //   <Prac02/>
    // </div>

    // <div>
    //   <p>Count: {count}</p>
    //   <button onClick={increment}>Increment</button>
    // </div>

    // <div>
    //   <UseRefVSUseState />
    // </div>

    // <div>
    //   <Prac03/>
    // </div>

    // <div>
    //   <UseRefVSVariable />
    // </div>

    // <div>
    //   <Prac04/>
    // </div>

    // <div>
    //   <UseRefDom />
    // </div>

    // <div>
    //   <Prac05/>
    // </div>

    // <div>
    //   <div style={style}>
    //     <h1>input 태그 value 값 지정</h1>
    //     이름 : <input type='text' ref={nameRef} value={name} onChange={(e) => setName(e.target.value)}/>
    //     <br/>
    //     나이 : <input type='number' ref={ageRef} value={age} onChange={(e) => setAge(e.target.value)} />
    //   </div>
    // </div>

    <div>
      <h3>어려운 계산기</h3>
      <input 
        type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> {hardNumber} + 10000 = {hardSum} </span>
    </div>
  );
}

export default App;
