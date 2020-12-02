/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import { NewTaskForm } from './Components/NewTaskForm/NewTaskForm';
import TaskList from './Components/TaskList/TaskList';
import { filterModesList } from './Components/TasksFilter/filterModes';
// eslint-disable-next-line import/order
import Jump from 'react-reveal/Jump';

const App = () => {
	const [taskList, setTaskList] = useState([
		{
			id: nanoid(),
			timeStamp: Date.now(),
			title: 'Drink coffee',
			timerInSeconds: 0,
			isCompleted: false,
			isOnEdit: false,
			isOnTimer: false,
		},
		{
			id: nanoid(),
			timeStamp: Date.now(),
			title: 'Make app',
			timerInSeconds: 0,
			isCompleted: false,
			isOnEdit: false,
			isOnTimer: false,
		},
		{
			id: nanoid(),
			timeStamp: Date.now(),
			title: "Don't relax",
			timerInSeconds: 0,
			isCompleted: true,
			isOnEdit: false,
			isOnTimer: false,
		},
	]);
	const [filterMode, setFilterMode] = useState('All');

	const createTask = title => {
		if (title.trim().length === 0) return;
		const newTask = Object.create(null);
		newTask.id = nanoid();
		newTask.timeStamp = Date.now();
		newTask.title = title;
		newTask.timerInSeconds = 0;
		newTask.isCompleted = false;
		newTask.isOnEdit = false;
		newTask.isOnTimer = false;
		return setTaskList(prevTaskList => [...prevTaskList, newTask]);
	};

	const deleteTask = id => setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== id));

	const toggleCompleteTask = (id, toggleValue) => {
		setTaskList(prevTaskList =>
			prevTaskList.map(task => {
				if (task.id === id) {
					return { ...task, isCompleted: toggleValue ?? !task.isCompleted };
				}
				return task;
			}),
		);
	};

	const toggleEditTask = (id, toggleValue) => {
		setTaskList(prevTaskList =>
			prevTaskList.map(task => {
				if (task.id === id) {
					return { ...task, isOnEdit: toggleValue ?? !task.isOnEdit };
				}
				return task;
			}),
		);
	};

	const toggleTimerTask = (id, toggleValue) => {
		setTaskList(prevTaskList =>
			prevTaskList.map(task => {
				if (task.id === id) {
					return { ...task, isOnTimer: toggleValue ?? !task.isOnTimer };
				}
				return task;
			}),
		);
	};

	const setTaskTitle = (id, title) => {
		setTaskList(prevTaskList =>
			prevTaskList.map(task => {
				if (task.id === id) {
					return { ...task, title };
				}
				return task;
			}),
		);
	};

	const setTaskTimer = (id, timerInSeconds) => {
		setTaskList(prevTaskList =>
			prevTaskList.map(task => {
				if (task.id === id) {
					return { ...task, timerInSeconds };
				}
				return task;
			}),
		);
	};

	const getCompletedList = () => taskList.filter(task => task.isCompleted);

	const getNotCompletedList = () => taskList.filter(task => !task.isCompleted);

	const clearCompletedTasks = () => setTaskList(prevTaskList => prevTaskList.filter(task => !task.isCompleted));

	const setFilter = newFilterMode => filterModesList.includes(newFilterMode) && setFilterMode(newFilterMode);

	const filterTaskList = () => {
		if (filterMode === 'Active') {
			return getNotCompletedList();
		}
		if (filterMode === 'Completed') {
			return getCompletedList();
		}
		return taskList;
	};

	const isAnyTaskOnEdit = taskList.some(task => task.isOnEdit);

	const taskListData = filterTaskList();

	const taskListMethods = {
		setTaskTitle,
		setTaskTimer,
		deleteTask,
		toggleCompleteTask,
		toggleEditTask,
		toggleTimerTask,
	};
	const filterMethods = { getNotCompletedList, clearCompletedTasks, setFilter };
	return (
		<section className="todoapp">
			<header className="header">
				<Jump>
					<h1>TODO-App</h1>
				</Jump>
				<NewTaskForm isAnyTaskOnEdit={isAnyTaskOnEdit} onCreateTask={createTask} />
			</header>

			<TaskList taskListData={taskListData} taskListMethods={taskListMethods} />

			<Footer filterModeData={filterMode} filterMethods={filterMethods} />
		</section>
	);
};

export default App;
