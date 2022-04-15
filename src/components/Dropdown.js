import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ categories, setCategory }) => {
  const changeHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <select
      name=''
      id=''
      onChange={(e) => changeHandler(e)}
      className='dropdown'
    >
      <option value='default'>*Select a Category*</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
