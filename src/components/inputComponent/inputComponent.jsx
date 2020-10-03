import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./inputComponent.module.css";
import * as ACTIONS from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const InputComponent = (props) => {
  const userTypingHandler = (e) => {
    props.userTypingActionCreator(e.target.value);
  };

  const addTaskHandler = () => {
    let newTask = {
      id: String(uuidv4()),
      task: props.usersInputValue,
      active: true,
    };
    props.addTask(newTask);
    sessionStorage.setItem(newTask.id, JSON.stringify(newTask));
    props.userTypingActionCreator("");
  };

  return (
    <div className={classes.InputComponent}>
      <input
        value={props.usersInputValue}
        onChange={userTypingHandler}
        type="text"
      />
      <div onClick={addTaskHandler}>
        <button disabled={props.usersInputValue === ""}>+</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    usersInputValue: state.toDo.usersInputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => dispatch(ACTIONS.addTaskActionCreator(newTask)),
    userTypingActionCreator: (text) =>
      dispatch(ACTIONS.userTypingActionCreator(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
