import React, { useEffect, useState } from "react";

const AddNameUesEffect = () => {
  /*
    case 1  useEffect(() => {}); callback 함수만 추가했을 경우
    호출 : 렌더링이 될 때마다 useEffect() 실행
     
    case 2 : useEffect(() => {}, []);
    호출 : 최초 1번 실행

    case 3: useEffect(()=> {}, [value]);
    호출 : 최초 1번, value값이 변결될 때마다 실행

  */

  const [names, setNames] = useState(() => heavyWork());

  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ names });
  }, [names]);
  function InputChange(e) {
    setInput(e.target.value); //기존 input -> 렌더링 -> new input
  }

  function heavyWork() {
    for (let i = 0; i < 1000; i++) {
      console.log("엄청 복잡한 계산 중.. 시간 오래 걸림..");
    }

    return ["김현빈", "리액트"];
  }
  function uploadInput() {
    //case 1.
    //1.배열 원본 복사
    //const newNames = [...names, input];
    //2. 새로운 배열에 원본과 입력 받은 값 추가한 배열
    //setNames(newNames);

    //case 2. callback 함수 이용
    setNames((prevState) => [input, ...prevState]);
  }

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default AddNameUesEffect;
