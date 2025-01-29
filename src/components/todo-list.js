import React from "react"
import TodoListItem from "./todo-list-item";

const TodoList = () => {

    return (
        <ul>
            <li><TodoListItem label = "Drink Coffee"/></li>
            <li><TodoListItem label = "Impleme4nt React Application"/></li>
            <li><TodoListItem label = "Make notes from your study"/></li>
            <li><TodoListItem label = "Do not drink alchohol" important/></li>
        </ul>
    );
};

export default TodoList;