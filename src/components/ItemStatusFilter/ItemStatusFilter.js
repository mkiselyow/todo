import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.props.updateStateProperty('')}
          className="btn btn-info">All</button>
        <button
          type="button"
          onClick={() => this.props.updateStateProperty(false)}
          className="btn btn-outline-secondary">Active</button>
        <button
          type="button"
          onClick={() => this.props.updateStateProperty(true)}
          className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}