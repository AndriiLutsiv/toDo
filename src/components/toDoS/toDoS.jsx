import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ToDoItem from "./toDoItem/toDoItem";
const ToDoS = (props) => {
  console.log(props);

  let item = null;
  if (props.all) {
    item = props.searchedTasks.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          task={item.task}
          active={item.active}
          id={item.id}
        />
      );
    });
  } else if (props.active) {
    let activeTasks = props.searchedTasks.filter((item) => {
      return item.active === true;
    });

    item = activeTasks.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          task={item.task}
          active={item.active}
          id={item.id}
        />
      );
    });
  } else if (props.done) {
    let doneItems = props.searchedTasks.filter((item) => {
      return item.active === false;
    });

    item = doneItems.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          task={item.task}
          active={item.active}
          id={item.id}
        />
      );
    });
  }
  return <>{item}</>;
};

const mapStateToProps = (state) => {
  return {
    usersInputValue: state.toDo.usersInputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToDoS));
