import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onClickDelete, onClickImportant, onMarkDone }) => {

    const elements = todos.map((item) =>{
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                  { ...itemProps }
                  onClickDelete={() => onClickDelete(id)}
                  onClickImportant={() => onClickImportant(id)}
                  onMarkDone={() => onMarkDone(id)}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;