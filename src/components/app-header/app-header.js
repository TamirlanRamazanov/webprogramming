import React from "react";
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className={"app-header d-flex"}>
            <h1>To-Do List</h1>
            <h2>{toDo} more to do, {done} </h2>
        </div>
    );

};

export default AppHeader;
