import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { filterModesList } from './filterModes';

const TasksFilter = ({ setFilter, selectedFilter }) => (
	<ul className="filters">
		{filterModesList.map(name => {
			const classNameAssociateList = clsx({
				selected: selectedFilter === name,
			});
			return (
				<li key={name}>
					<button type="button" onClick={() => setFilter(name)} className={classNameAssociateList}>
						{name}
					</button>
				</li>
			);
		})}
	</ul>
);

export default TasksFilter;

TasksFilter.propTypes = {
	setFilter: PropTypes.func.isRequired,
	selectedFilter: PropTypes.string.isRequired,
};
