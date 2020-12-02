/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import KEY_CODES from '../../helpersKeyCode';

// eslint-disable-next-line import/prefer-default-export
export const NewTaskForm = ({ isAnyTaskOnEdit, onCreateTask }) => {
	const [inputValue, setInputValue] = useState('');
	const inputReference = React.createRef();
	useEffect(() => inputReference.current.focus(), []);

	const onChangeHandler = event => setInputValue(event.target.value);
	const onKeyDownHandler = event => {
		const { ENTER_KEY, ESC_KEY } = KEY_CODES;
		if (event.keyCode !== ENTER_KEY && event.keyCode !== ESC_KEY) return;
		if (event.keyCode === ENTER_KEY) {
			onCreateTask(inputValue);
		}
		setInputValue('');
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
			<input className="new-todo-form__timer" disabled placeholder="Min" />
			<input className="new-todo-form__timer" disabled placeholder="Sec" />
		</form>
	);
};

NewTaskForm.propTypes = {
	onCreateTask: PropTypes.func.isRequired,
	isAnyTaskOnEdit: PropTypes.bool.isRequired,
};
