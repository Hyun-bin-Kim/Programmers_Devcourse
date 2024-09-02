import React, { useState } from "react";
import '../styles/TodoInsert.scss'

const TodoInsert = ({ insertItem }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    insertItem(value);
    setValue(''); // 입력 후 초기화
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;
