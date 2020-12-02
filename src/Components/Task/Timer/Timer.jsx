/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import taskModel from '../taskModel';
import formatTimer from './Data/formatTimer';
import useInterval from './hooks/useInterval';

const Timer = ({ taskData, updateTaskTimer, updateTaskOnTimer }) => {
	const { id, isOnEdit, isCompleted, timerInSeconds, isOnTimer } = taskData;
	const [delay, setDelay] = useState(undefined);
	const [isStartButtonDisabled, setStartButtonDisabled] = useState(false);
	const [isStopButtonDisabled, setStopButtonDisabled] = useState(false);
	const [isDroppingButtonDisabled] = useState(false);
	const displayedTimer = formatTimer(timerInSeconds);

	const onTimerStartHandler = () => {
		if (!isOnTimer) {
			setStopButtonDisabled(false);
			setDelay(1000);
			updateTaskOnTimer(id, true);
		}
	};

	const onTimerStopHandler = () => {
		if (isOnTimer) {
			setDelay(undefined);
			updateTaskOnTimer(id, false);
		}
	};

	const onTimerDroppingHandler = () => {
		// eslint-disable-next-line no-constant-condition
		if (true) {
			updateTaskTimer(id, 0);
		}
	};

	useEffect(() => {
		if (isOnEdit || isCompleted) {
			if (isOnTimer) {
				setDelay(undefined);
				updateTaskOnTimer(id, false);
			}
			if (!isStartButtonDisabled || !isStopButtonDisabled || isStartButtonDisabled) {
				setStartButtonDisabled(true);
				setStopButtonDisabled(true);
			}
		} else if (isStartButtonDisabled || isStopButtonDisabled || isStartButtonDisabled) {
			setStartButtonDisabled(false);
			setStopButtonDisabled(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOnEdit, isCompleted]);

	useInterval(() => updateTaskTimer(id, timerInSeconds + 1), delay);

	return (
		<span className="description">
			<button
				disabled={isStartButtonDisabled}
				type="button"
				aria-label="play"
				className="icon icon-play"
				onClick={onTimerStartHandler}
			/>
			<button
				disabled={isStopButtonDisabled}
				type="button"
				aria-label="pause"
				className="icon icon-pause"
				onClick={onTimerStopHandler}
			/>
			<button
				disabled={isDroppingButtonDisabled}
				type="button"
				aria-label="pause"
				className="icon icon-dropping"
				onClick={onTimerDroppingHandler}
			/>
			{displayedTimer}
		</span>
	);
};

Timer.propTypes = {
	taskData: taskModel.isRequired,
	updateTaskTimer: PropTypes.func.isRequired,
	updateTaskOnTimer: PropTypes.func.isRequired,
};

export default Timer;
