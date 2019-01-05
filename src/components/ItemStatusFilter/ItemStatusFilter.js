import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: '', label: 'All' },
    { name: false, label: 'Active' },
    { name: true, label: 'Done' }
  ];

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const className = (this.props.filterStatus === name)
        ? 'btn btn-info'
        : 'btn btn-outline-secondary';

      return (
        <button
          type="button"
          key={name}
          onClick={() => {this.props.updateStateProperty(name)}}
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