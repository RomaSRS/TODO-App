import PropTypes from 'prop-types';

export const filterModesList = ['All', 'Active', 'Completed'];

export const filterModesModel = PropTypes.oneOf(filterModesList);
