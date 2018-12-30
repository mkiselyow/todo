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
    } else {
      this.onTextInput(e.key);
    }
  };

  onTextInput = (newSymbol) => {
    this.setState(({textInput}) => {
      return {
        textInput: (textInput + newSymbol)
      }
    })
  };

  clearInput = () => {
    this.setState(({textInput}) => {
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
             onKeyPress={this.handleKeyPress}
      />
    )
  }
}