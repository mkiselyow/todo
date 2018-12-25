import React from "react";

import './AppHeader.css';

const AppHeader = ({todo = 1, done = 1}) => {
    return (
      <div className="app-header d-flex flex-column align-items-start justify-content-center">
          <h1>My Todo List</h1>
          <span>{todo} more to do, {done} done</span>
      </div>
    )
};

export default AppHeader;