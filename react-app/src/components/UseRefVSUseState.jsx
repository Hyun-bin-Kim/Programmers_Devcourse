import React, { useRef, useState } from "react";

const UseRefVSUseState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function addStateHandler() {
    console.log("STATE 변경");
    setCount(count + 1);
  }

  function addRefHandler() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <div>
      <h1>State 값 : {count} </h1>
      <h1>Ref 값 :{countRef.current}</h1>
      <button onClick={addStateHandler}>State</button>
      <button onClick={addRefHandler}>Ref</button>
    </div>
  );
};

export default UseRefVSUseState;
