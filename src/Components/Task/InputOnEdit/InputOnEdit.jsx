/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import KEY_CODES from '../../../helpersKeyCode';

const InputOnEdit = ({ id, initialInputValue, updateTaskTitle, updateTaskOnEdit }) => {
	const [inputValue, setInputValue] = useState(initialInputValue);
	const inputReference = React.createRef();
	useEffect(() => inputReference.current.focus(), []);

	const onBlurHandler = () => updateTaskOnEdit(id, false);
	const onChangeHandler = event => setInputValue(event.target.value);
	const onKeyDownHandler = event => {
		const { ENTER_KEY, ESC_KEY } = KEY_CODES;
		if (event.keyCode !== ENTER_KEY && event.keyCode !== ESC_KEY) return;
		if (event.keyCode === ENTER_KEY) {
			updateTaskTitle(id, inputValue);
		}
		event.target.blur();
	};

	return (
		<input
			className="edit"
			type="text"
			ref={inputReference}
			value={inputValue}
			onBlur={onBlurHandler}
			onChange={onChangeHandler}
			onKeyDown={onKeyDownHandler}
		/>
	);
};

export default InputOnEdit;

InputOnEdit.propTypes = {
	id: PropTypes.string.isRequired,
	initialInputValue: PropTypes.string.isRequired,
	updateTaskTitle: PropTypes.func.isRequired,
	updateTaskOnEdit: PropTypes.func.isRequired,
};
