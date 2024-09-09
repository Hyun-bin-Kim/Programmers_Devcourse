import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

//redux는 상단 컴포넌트에서 값이 변경 됬다고 하위 컴포넌트 렌더링 안된다 -> 그럼? -> 실제 값을 쓰는 컴포넌트만 렌더링 됨 -> 대규모 프로젝트에서 적용 -> 성능 개선~! -> 그치만 사용하는게 어렵다..

const Counter = () => {
  const count = useSelector((state) => state.counter.value); //0
  const dispatch = useDispatch();

  return (
    <div>
      <h1>현재 카운터 값은 {count}입니다.</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(100))}>Amount</button>
    </div>
  );
};
export default Counter;
