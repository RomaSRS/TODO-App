/* eslint-disable react/no-unused-state */
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import taskModel from './taskModel';
import InputOnEdit from './InputOnEdit/InputOnEdit';
import Timer from './Timer/Timer';

const Task = ({
	taskData,
	updateTaskTimer,
	updateTaskOnTimer,
	updateTaskTitle,
	updateTaskCompleted,
	updateTaskOnEdit,
	deleteTask,
}) => {
	const { id, timeStamp, title, isCompleted, isOnEdit } = taskData;

	const isTaskOnEdit = () =>
		isOnEdit && (
			<InputOnEdit
				id={id}
				initialInputValue={title}
				updateTaskOnEdit={updateTaskOnEdit}
				updateTaskTitle={updateTaskTitle}
			/>
		);

	const onChangeCompletedHandler = () => updateTaskCompleted(id);
	const onClickEditHandler = () => updateTaskOnEdit(id);
	const onClickDeleteHandler = () => deleteTask(id);

	return (
		<>
			<div className="view">
				<input className="toggle" type="checkbox" checked={isCompleted} onChange={onChangeCompletedHandler} />
				<label>
					<span className="title">{title}</span>
					<Timer
						taskData={taskData}
						updateTaskOnTimer={updateTaskOnTimer}
						updateTaskTimer={updateTaskTimer}
					/>
					<span className="description">created {formatDistanceToNow(timeStamp)} ago</span>
				</label>
				<button type="button" className="icon icon-edit" aria-label="Edit Task" onClick={onClickEditHandler} />
				<button
					type="button"
					className="icon icon-destroy"
					aria-label="Delete Task"
					onClick={onClickDeleteHandler}
				/>
			</div>
			{isTaskOnEdit()}
		</>
	);
};

export default Task;

Task.propTypes = {
	taskData: taskModel.isRequired,
	updateTaskTimer: PropTypes.func.isRequired,
	updateTaskOnTimer: PropTypes.func.isRequired,
	updateTaskTitle: PropTypes.func.isRequired,
	updateTaskCompleted: PropTypes.func.isRequired,
	updateTaskOnEdit: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
};
