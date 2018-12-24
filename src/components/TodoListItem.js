import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important = false, id }) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <span
            className="todo-list-item"
            style={liStyle}>
            { label }
        </span>);
};

export default TodoListItem;