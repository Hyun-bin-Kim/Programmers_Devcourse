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
  //     poster: happy
  //   },
  //   {
  //     title: "에이리언-로물루스",
  //     open: "2024.08.14",
  //     poster: alien
  //   },
  //   {
  //     title: "트위스터스",
  //     open: "2024.08.14",
  //     poster: twisters
  //   }
  // ];

  // const todoList = [
  //   {taskName: '빨래하기', finished: false},
  //   {taskName: '공부하기', finished: false}
  // ];
  
  // const moneyList = [
  //   {money: '가격: 1000원'},
  //   {money: '가격: 2000원'},
  //   {money: '가격: 3000원'},
  //   {money: '가격: 4000원'}
  // ]

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
    //     todoList.map(todo => <div>{ todo.taskName }</div>)
    //   }
    // </>

    // <>
    // <h2>가격목록</h2>
    //   {
    //     moneyList.map(money => 
    //     <div>
    //       {money.money}
    //     </div>)
    //   }
    // </>

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

    <>
      <PropTypesComponents item={3} price={1000}/>
    </>
  );
}

export default App;
