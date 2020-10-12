import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ToDoS from "./components/toDoS/toDoS";
import Layout from "./containers/layout/layout";
import * as AC from "../src/redux/actions";


const  App = (props) => {
  useEffect(() => {     //this one gets tasks from session storage and sets them again,  so we are safe while page is refreshed at least in scope of one browser session
    let keys = Object.keys(sessionStorage);
    keys.forEach((element) => {
      let newTask = sessionStorage.getItem(element);
      props.addTask(JSON.parse(newTask));
    });
  }, [])
 
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/done" render={() => <ToDoS tasks={props.tasks} done />} />
            <Route path="/active" render={() => <ToDoS tasks={props.tasks} active />} />
            <Route exact path="/" render={() => <ToDoS tasks={props.tasks} all />} />
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
