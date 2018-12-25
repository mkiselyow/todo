import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  constructor( {done = false, important = false} ) {
    super();
    this.state = {
      done: done,
      important: important
    };
    this.onLabelClick = () => {
      console.log(`Done: ${this.props.label}`);
      this.setState(({ done }) => {
        return {
          done : !done
        };
      });
    };
    this.onImportantClick = () => {
      this.setState(({ important }) => {
        return {
          important: !important
        };
      });
    };
  }

  render() {
    const { label, onClickDelete } = this.props;
    let { done, important } = this.state;
    let className = 'todo-list-item ' + (done ? 'done' : '');
    let style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className={className}>
            <span
              className="todo-list-item-label"
              style={style}
              onClick={this.onLabelClick}>
                { label }
            </span>

            <button type="button"
                    onClick={this.onImportantClick}
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
  }
}