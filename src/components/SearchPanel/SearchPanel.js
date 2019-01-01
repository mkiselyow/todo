import React from "react";

import './SearchPanel.css';

const SearchPanel = ({handleChangeInput}) => {
    return (
      <input
        type="text"
        placeholder="search"
        onChange={(e) => handleChangeInput(e)}
        className="form-control search-input"/>
    )
};

export default SearchPanel;

