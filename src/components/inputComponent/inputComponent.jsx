import React from "react";
import classes from "./inputComponent.module.css";
const InputComponent = () => {
  return (
    <div className={classes.InputComponent}>
      <input type="text" />
      <div className={classes.Add}>+</div>
    </div>
  );
};
export default InputComponent;
