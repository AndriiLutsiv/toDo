import React from "react";
import InputComponent from "../../components/inputComponent/inputComponent";
import Tabs from "../../components/tabs/tabs";
const Layout = (props) => {
  return (
    <div>
      <InputComponent />
      <Tabs />
      {props.children}
    </div>
  );
};
export default Layout;
