import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.state = {
      activeBtn: ''
    };
  };

  handleBtnPress = (btnName) => {
    this.setState({activeBtn: btnName})
  };

  buttons = [
    { name: '', label: 'All' },
    { name: false, label: 'Active' },
    { name: true, label: 'Done' }
  ];

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const className = (this.state.activeBtn === name)
        ? 'btn btn-info'
        : 'btn btn-outline-secondary';

      return (
        <button
          type="button"
          onClick={() => {this.handleBtnPress(name); this.props.updateStateProperty(name)}}
          className={className}>{label}</button>
        );
    });

    return (
      <div>
        { buttons }
      </div>
    );
  }
}