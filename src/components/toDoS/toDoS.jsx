import React from "react";
import { withRouter } from "react-router-dom";
import ToDoItem from "./toDoItem/toDoItem";
const ToDoS = (props) => {
  let data = [
    { id: 1, task: "to do something", active: true },
    { id: 2, task: "did something", active: false },
  ];

  let item = null;
  if (props.all) {
    //here display all
    item = (
      <div>
        <ToDoItem task="still in process" />
        <ToDoItem task="still in process" />
        <ToDoItem task="already done" />
        <ToDoItem task="already done" />
      </div>
    );
  } else if (props.active) {
    //here filter / find only with active true
    item = (
      <div>
        <ToDoItem task="still in process" />
        <ToDoItem task="still in process" />
      </div>
    );
  } else if (props.done) {
    //here filter / find only with active false
    return (
      <div>
        <ToDoItem task="already done" />
        <ToDoItem task="already done" />
      </div>
    );
  }
  return <>{item}</>;
};
export default withRouter(ToDoS);
