import PropTypes from 'prop-types';
import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import { filterModesModel } from '../TasksFilter/filterModes';

const Footer = ({ filterModeData, filterMethods }) => {
	const { getNotCompletedList, clearCompletedTasks, setFilter } = filterMethods;

	const notCompletedList = getNotCompletedList();

	return (
		<footer className="footer">
			<span className="todo-count">{notCompletedList.length} items left</span>
			<TasksFilter setFilter={setFilter} selectedFilter={filterModeData} />
			<button type="button" className="clear-completed" onClick={clearCompletedTasks}>
				Clear completed
			</button>
		</footer>
	);
};

export default Footer;

Footer.propTypes = {
	filterModeData: filterModesModel.isRequired,
	filterMethods: PropTypes.objectOf(PropTypes.func).isRequired,
};
