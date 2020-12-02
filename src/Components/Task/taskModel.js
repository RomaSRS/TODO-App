import PropTypes from 'prop-types';

const taskModel = PropTypes.exact({
	id: PropTypes.string,
	timeStamp: PropTypes.number,
	title: PropTypes.string,
	timerInSeconds: PropTypes.number,
	isCompleted: PropTypes.bool,
	isOnEdit: PropTypes.bool,
	isOnTimer: PropTypes.bool,
});

export default taskModel;
