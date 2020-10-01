import React from "react";
import classes from "./toDoItem.module.css";
const ToDoItem = (props) => {
  return (
    <div className={classes.ToDoItem}>
      <div className={classes.CheckBox}>
        <input type="checkbox" />
      </div>
      <div className={classes.Task}>{props.task}</div>
      <div className={classes.Remove}>x</div>
    </div>
  );
};
export default ToDoItem;
