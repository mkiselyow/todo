import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({
                        label,
                        onClickDelete,
                        onClickImportant,
                        onMarkDone,
                        done,
                        important
                      }) => {

  const className = 'todo-list-item ' + (done ? 'done' : '');
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className={className}>
          <span
            className="todo-list-item-label"
            style={style}
            onClick={onMarkDone}>
              { label }
          </span>

          <button type="button"
                  onClick={onClickImportant}
                  className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-exclamation"/>
          </button>

          <button type="button"
                  onClick={onClickDelete}
                  className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o"/>
          </button>
      </span>
  );
};

export default TodoListItem;