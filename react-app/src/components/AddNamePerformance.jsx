import React, { useState } from "react";

const AddNamePerformance = () => {
  /*
    렌더링이 될 때마다(setInput, setNames 호출) -> heavyWork()가 매번 호출 됨 -> for 실행 -> 성능 저하

    heavyWork() 언제만 렌더링(호출) 되어야 하나? -> 최초에 1번만 호출하도록 변경

  */
  //useState(숫자, 문자열, 베열, 객체, 함수)
  //const [names, setNames] = useState(heavyWork());
  const [names, setNames] = useState(() => heavyWork()); //최초에 1번만 호촐 = 콜백함수
  const [input, setInput] = useState("");
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

export default AddNamePerformance;
