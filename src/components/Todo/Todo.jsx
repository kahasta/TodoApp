import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div className="todo">
      <p className={props.classP}>{props.text}</p>
      <div className="todoBtn">
        <input
          type="checkbox"
          id="checkbox"
          checked={props.checkbox ? "checked" : ""}
          onChange={props.onCheckBox}
        />

        <button onClick={props.onDelete}>
          <div className="trash">+</div>
        </button>
      </div>
    </div>
  );
};

export default Todo;
