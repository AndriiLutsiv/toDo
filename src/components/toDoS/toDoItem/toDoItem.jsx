import React from "react";
import classes from "./toDoItem.module.css";
import * as ACTIONS from "../../../redux/actions";
import { connect } from "react-redux";
const ToDoItem = (props) => {
  const removeHandler = () => {
    props.removeTask(props.id);
    sessionStorage.removeItem(props.id);
  };

  const toggleMarkHandler = () => {
    props.toggleMark(props.id);

    let toggledTask = props.tasks.find((task) => {
      return task.id === props.id;
    });
    toggledTask.active = !toggledTask.active;
    sessionStorage.setItem(props.id, JSON.stringify(toggledTask));
  };

  let taskStyle = [classes.Task];
  if (!props.active) {
    taskStyle.push(classes.Done);
  }
  return (
    <div className={classes.ToDoItem}>
      <div className={classes.CheckBox}>
        <input
          checked={!props.active ? true : false}
          onClick={toggleMarkHandler}
          type="checkbox"
        />
      </div>
      <div className={taskStyle.join(" ")} onClick={toggleMarkHandler}>{props.task}</div>
      <div onClick={removeHandler} className={classes.Remove}>
      &#10006;
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.toDo.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (taskId) => dispatch(ACTIONS.remooveTaskActionCreator(taskId)),
    toggleMark: (taskId) => dispatch(ACTIONS.toggleMarkActionCreator(taskId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
