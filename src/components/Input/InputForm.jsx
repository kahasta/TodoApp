import React from "react";
import "./InputForm.css";
const InputForm = props => {
  return (
    <div className="input_form">
      <form onSubmit={event => props.addTodo(event, props.value)}>
        <input
          className="input_text"
          type="text"
          placeholder="type new todo..."
          value={props.value}
          onChange={event => props.onChange(event)}
        ></input>
        <input type="submit" value="add todo"></input>
      </form>
    </div>
  );
};

export default InputForm;
