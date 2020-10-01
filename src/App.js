import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ToDoS from "./components/toDoS/toDoS";
import Layout from "./containers/layout/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/done" render={() => <ToDoS done />} />
          <Route path="/active" render={() => <ToDoS active />} />
          <Route path="/all" render={() => <ToDoS all />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
