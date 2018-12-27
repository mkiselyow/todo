import React from 'react';

import './InputNewItem.css';

const InputNewItem = () => {
  const createItem = () => {
    console.log('create Item!');
    console.log(searchInput.value);
  };
  let searchInput;

  return (
    <input type="text"
           className="form-control mt-3"
           placeholder="Enter new todo name"
           ref={(input) => { searchInput = input }}
           onChange={createItem.bind(this, this)}
    />
  )
};

export default InputNewItem;