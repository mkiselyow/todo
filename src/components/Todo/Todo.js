import React, {Component} from "react";

import './Todo.css';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import InputNewItem from '../InputNewItem/InputNewItem';

export default class Todo extends Component {
  constructor() {
    super();

    this.createTodoItem = (label, important = false) => {
      return {
        label: label,
        important: important,
        id: parseInt((Math.random()*1000000).toFixed(0), 10),
        done: false
      }
    };

    this.state = {
      todoData : [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App', true),
        this.createTodoItem('Have a lunch')
      ]
    };

    this.onClickDelete = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: todoData.filter((item) => item.id !== id)
        }
      })
    };

    this.onClickAdd = (newItemLabel) => {
      this.setState(({todoData}) => {
        return {
          todoData: [
            ...todoData,
            this.createTodoItem(newItemLabel)
          ]
        }
      })
    };

    this.onClickImportant = (id) => {
      this.setState(({todoData}) => {
        const listItemIndex = todoData.findIndex( ({id: itemId}) => itemId === id);
        const updatedListItem = {...(todoData[listItemIndex])};
        updatedListItem.important = !updatedListItem.important;
        const listItemsBefore = todoData.slice(0, (listItemIndex));
        const listItemsAfter = todoData.slice(listItemIndex+1);
        const newTodoData = [
          ...listItemsBefore,
          updatedListItem,
          ...listItemsAfter
        ];

        return {
          todoData: newTodoData
        }
      })
    };

    this.onMarkDone = (id) => {
      this.setState(({todoData}) => {
        const listItemIndex = todoData.findIndex( ({id: itemId}) => itemId === id);
        const updatedListItem = {...(todoData[listItemIndex])};
        updatedListItem.done = !updatedListItem.done;
        const listItemsBefore = todoData.slice(0, (listItemIndex));
        const listItemsAfter = todoData.slice(listItemIndex+1);
        const newTodoData = [
          ...listItemsBefore,
          updatedListItem,
          ...listItemsAfter
        ];

        return {
          todoData: newTodoData
        }
      })
    };
  }

  render() {
    let {todoData} = this.state;
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
        <TodoList
          todos={todoData}
          onClickDelete={this.onClickDelete}
          onClickImportant={this.onClickImportant}
          onMarkDone={this.onMarkDone}
        />
        <InputNewItem
          onClickAdd={this.onClickAdd}
        />
      </div>
    )
  }
};