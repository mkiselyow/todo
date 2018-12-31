import React, {Component} from "react";

import './SearchPanel.css';

export default class SearchPanel extends Component {
  constructor(){
    super();
    this.state = {
      value: ""
    };
  };

  handleChangeInput = (e) => {
    if (e.target.value) {
      this.onTextInput(e.target.value);
    }
  };

  onTextInput = (value) => {
    this.setState(
      () => {
        return {
          value: value
        }
      },
      () => console.log(this.state.value)
      /*this.props.onClickAdd(this.state.value)*/);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        placeholder="search"
        onChange={this.handleChangeInput}
        className="form-control search-input"/>
    );
  };
};

