import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ToDoItem from "./toDoItem/toDoItem";

//below we check which props are coming to us so the proper items are rendered respectively
const ToDoS = (props) => {
    let item = null;

    if (props.all) {                                 //in this case we map throughout all the items and render ToDoItem for every element
        item = props.tasks.map((item) => {
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
        let activeTasks = props.tasks.filter((item) => {   //in this case we filter and recieve those items which have active property equaled to true 
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
        let doneItems = props.tasks.filter((item) => {  //in this case we filter and recieve those items which have active property equaled to false 
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
export default ToDoS;
