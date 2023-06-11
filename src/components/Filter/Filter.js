import React from "react";
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        autoComplete="off"
        onChange={ handleChange }
        name="name"
      />
    </div>
  );
};