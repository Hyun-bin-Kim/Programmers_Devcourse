import React, { useState } from "react";

const CheckBox = (props) => {
  // const {cap, shoes, bag} = props;
  const { list } = props;
  const [total, setTotal] = useState(0);
  function changeHandler(checkbox) {
    if (checkbox.checked) {
      //total = total + checkbox.value
      // setTotal(total + parseInt(checkbox.value))
      setTotal((prevState) => prevState + parseInt(checkbox.value));
    } else {
      //total = total - checkbox.value
      // setTotal(total - parseInt(checkbox.value))
      setTotal((prevState) => prevState - parseInt(checkbox.value));
    }
  }

  return (
    <div>
      {list.map((item) => (
        <label key={item.name}>
          <input
            type="checkbox"
            value={item.price}
            onChange={(e) => changeHandler(e.target)}
          />
          {item.name}
        </label>
      ))}
      {/* <input
        type="checkbox"
        value={cap}
        onChange={(e) => {
          changeHandler(e.target);
        }}
      />{" "}
      모자 1만원
      <br />
      <input type="checkbox" value={shoes} onChange={() => {}} /> 신발 3만원
      <br />
      <input type="checkbox" value={bag} onChange={() => {}} /> 가방 8만원
      <br /> */}
      <p>합계 : {} </p>
    </div>
  );
};

export default CheckBox;
