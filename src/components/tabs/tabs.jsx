import classes from "./tabs.module.css";
import React from "react";
import AllTab from "./allTab/allTab";
import ActiveTab from "./activeTab/activeTab";
import DoneTab from "./doneTab/doneTab";
import { NavLink } from "react-router-dom";
const Tabs = (props) => {
  return (
    <div className={classes.Tabs}>
      <NavLink exact activeClassName={classes.active} to="/">
        <AllTab />
      </NavLink>
      <NavLink activeClassName={classes.active} to="/active">
        <ActiveTab />
      </NavLink>
      <NavLink activeClassName={classes.active} to="/done">
        <DoneTab />
      </NavLink>
    </div>
  );
};
export default Tabs;
