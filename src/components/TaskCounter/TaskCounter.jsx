import React from "react";
import "./TaskCounter.css";
const TaskCounter = props => {
  return (
    <div className="total">
      {props.total > 0 ? (
        <h3>
          Completed tasks: {props.completed} of {props.total}
        </h3>
      ) : (
        <h3>No tasks</h3>
      )}
    </div>
  );
};

export default TaskCounter;
