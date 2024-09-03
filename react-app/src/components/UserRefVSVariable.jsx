import React, { useRef, useState } from "react";

const UseRefVSVariable = () => {
  const countRef = useRef(0);
  const [value, setValue] = useState(0); //렌더링
  let variable = 0;

  console.log("Ddd");

  function addRefHandler() {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  }
  function addVariableHandler() {
    variable = variable + 1;
    console.log("variable : ", variable);
  }
  function reRender() {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>Ref 값 : {countRef.current}</h1>
      <h1>변수 값 : {variable} </h1>
      <button onClick={addRefHandler}>Ref</button>
      <button onClick={addVariableHandler}>Var</button>
      <button onClick={reRender}>Rendering</button>
    </div>
  );
};

export default UseRefVSVariable;
