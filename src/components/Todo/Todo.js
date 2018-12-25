import React from "react";

import './Todo.css';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const Todo = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];
    const isLoggedIn = true;
    const loginBox = <span>{isLoggedIn ? 'Log in please' : 'Hello User'}</span>;
    const done = todoData.filter((item) => item.done === true).length;
    const todo = todoData.length - done;

    return (
        <div className="todo-app">
            { loginBox }
            <AppHeader done={done} todo={todo}/>
            <div className="top-panel d-flex">
              <SearchPanel/>
              <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
};

export default Todo;