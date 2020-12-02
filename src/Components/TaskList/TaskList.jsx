import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import taskListDataModel from './taskListData';
import Task from '../Task/Task';

const EmptyField = () => <span />;

const TaskList = props => {
	const { taskListData, taskListMethods } = props;
	const {
		setTaskTitle,
		setTaskTimer,
		deleteTask,
		toggleCompleteTask,
		toggleEditTask,
		toggleTimerTask,
	} = taskListMethods;

	return taskListData.length === 0 ? (
		<EmptyField />
	) : (
		<ul className="todo-list">
			{taskListData.map(task => {
				const { id, isCompleted, isOnEdit } = task;
				const classNamesAssociations = { completed: isCompleted, editing: isOnEdit };
				const listClassNames = clsx(classNamesAssociations);
				return (
					<li className={listClassNames} key={id}>
						<Task
							taskData={task}
							deleteTask={deleteTask}
							updateTaskCompleted={toggleCompleteTask}
							updateTaskTimer={setTaskTimer}
							updateTaskOnTimer={toggleTimerTask}
							updateTaskOnEdit={toggleEditTask}
							updateTaskTitle={setTaskTitle}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default TaskList;

TaskList.propTypes = {
	taskListData: taskListDataModel.isRequired,
	taskListMethods: PropTypes.objectOf(PropTypes.func).isRequired,
};
