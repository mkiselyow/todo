import React from "react";

import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const Todo = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];
    const isLoggedIn = true;
    const loginBox = <span>{isLoggedIn ? 'Log in please' : 'Hello User'}</span>;

    return (
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
};

export default Todo;