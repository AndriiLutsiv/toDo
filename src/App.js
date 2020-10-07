import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ToDoS from "./components/toDoS/toDoS";
import Layout from "./containers/layout/layout";
import * as AC from "../src/redux/actions";


const  App = (props) => {
  useEffect(() => {
    let keys = Object.keys(sessionStorage);
    keys.forEach((element) => {
      let newTask = sessionStorage.getItem(element);
      props.addTask(JSON.parse(newTask));
      console.log('a');
    });
  }, [])
 
    const searchedTasks = props.tasks.filter((item) => {
      return item.task.toLowerCase().includes(props.usersInputValue);
    });
    return (
      <div className="App">
        
        <Layout>
          <Switch>
            <Route
              path="/done"
              render={() => <ToDoS searchedTasks={searchedTasks} done />}
            />
            <Route
              path="/active"
              render={() => <ToDoS searchedTasks={searchedTasks} active />}
            />
            <Route
              exact
              path="/"
              render={() => <ToDoS searchedTasks={searchedTasks} all />}
            />
          </Switch>
        </Layout>
      </div>
    );
 
}

const mapStateToProps = (state) => {
  return {
    usersInputValue: state.toDo.usersInputValue,
    tasks: state.toDo.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => dispatch(AC.addTaskActionCreator(newTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
