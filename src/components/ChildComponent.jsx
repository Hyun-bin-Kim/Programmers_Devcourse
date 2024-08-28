import React from "react";

const ChildComponent = ({ children }) => {
  return (
    <div>
      <h1>Children 값은 {children} 입니다.</h1>
    </div>
  );
};

export default ChildComponent;
