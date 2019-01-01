import React, {Component} from 'react';

import './InputNewItem.css';

export default class InputNewItem extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onClickAdd(this.state.textInput);
      this.clearInput();
    }
  };

  handleOnChange = (e) => {
    this.setState({textInput: e.target.value});
  };

  clearInput = () => {
    this.setState(() => {
      return {
        textInput: ""
      }
    })
  };

  render() {
    return (
      <input type="text"
             value={this.state.textInput}
             className="form-control mt-3"
             placeholder="What needs to be done?"
             onChange={this.handleOnChange}
             onKeyPress={this.handleKeyPress}
      />
    )
  }
}