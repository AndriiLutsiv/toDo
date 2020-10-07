import classes from "./layout.module.css";
import React from "react";
import InputComponent from "../../components/inputComponent/inputComponent";
import Tabs from "../../components/tabs/tabs";
const Layout = (props) => {
  return (
    <div className={classes.LaoutWrapper} >
      <div className={classes.Layout}>
        <h3 className={classes.Title}>Please add task or search for the existing one</h3>
        <InputComponent />
        <Tabs />
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
