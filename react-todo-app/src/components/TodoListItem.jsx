import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../styles/TodoListItem.scss";

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={`checkbox ${checked ? "checked" : ""}`}
        onClick={() => onToggle(id)}
      >
        {checked && "✓"}
      </div>
      <div className={`text ${checked ? "checked" : ""}`}>{text}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <IoIosRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
