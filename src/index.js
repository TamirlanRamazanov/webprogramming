import React from "react";
import { createRoot } from "react-dom/client";

//const element = React.createElement('hi', null, 'Hello React World');

const TodoList = () => {
    return (
        <ul>
            <li>Install React</li>
            <li>Use React</li>
            <li>Build React App</li>
        </ul>
    );
};

const AppHeader = () =>{
    return <h1>My To-do List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search"/>;
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);