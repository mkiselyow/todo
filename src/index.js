import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

    const items = ['Drink Coffee', 'Build React App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>Todo List</h1>
};

const SearchPanel = () => {
    return <input placeholder="search"/>
};

const Todo = () => {

    const loginBox = <span>Log in please</span>;

    return (
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
};

ReactDOM.render(<Todo/>, document.getElementById('root'));