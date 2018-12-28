import React, {Component} from 'react';

import './InputNewItem.css';

export default class InputNewItem extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  render() {
    return (
      <input type="text"
             className="form-control mt-3"
             placeholder="Enter new todo name"
             onChange={() => this.props.onClickAdd("Ssssssssss")}
      />
    )
  }
}