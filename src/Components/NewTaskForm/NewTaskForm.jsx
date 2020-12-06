/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import KEY_CODES from '../../helpersKeyCode';

// eslint-disable-next-line import/prefer-default-export
export const NewTaskForm = ({ isAnyTaskOnEdit, onCreateTask }) => {
 const [inputValue, setInputValue] = useState('');
 const [minValue, setMinValue] = useState('');
 const [secValue, setSecValue] = useState('');
 const inputReference = useRef(null);
 // const minReference = useRef(null);
 // const secReference = useRef(null);
 useEffect(() => inputReference.current.focus(), []);

 const onChangeHandler = event => setInputValue(event.target.value);
 const minChangeHandler = event => setMinValue(event.target.value);
 const secChangeHandler = event => setSecValue(event.target.value);

 const onKeyDownHandler = event => {
  const { ENTER_KEY, ESC_KEY } = KEY_CODES;
  if (event.keyCode !== ENTER_KEY && event.keyCode !== ESC_KEY) return;
  if (event.keyCode === ENTER_KEY) {
   onCreateTask(inputValue, +minValue * 60 + +secValue);
  }
  setInputValue('');
  setMinValue('');
  setSecValue('');
  event.target.blur();
 };

 return (
  <form className="new-todo-form">
   <input
    type="text"
    className="new-todo"
    placeholder="What needs to be done?"
    ref={inputReference}
    value={inputValue}
    onChange={onChangeHandler}
    onKeyDown={onKeyDownHandler}
    disabled={isAnyTaskOnEdit}
   />
   <input
    type="text"
    className="new-todo-form__timer"
    placeholder="Min"
    // ref={minReference}
    value={minValue}
    onChange={minChangeHandler}
    onKeyDown={onKeyDownHandler}
   />
   <input
    type="text"
    className="new-todo-form__timer"
    placeholder="Sec"
    // ref={secReference}
    value={secValue}
    onChange={secChangeHandler}
    onKeyDown={onKeyDownHandler}
   />
  </form>
 );
};

NewTaskForm.propTypes = {
 onCreateTask: PropTypes.func.isRequired,
 isAnyTaskOnEdit: PropTypes.bool.isRequired,
};
