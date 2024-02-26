import React from 'react';
import { Alert, Col } from 'antd';
import PropTypes from "prop-types";

import classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ message, description }) => (
	<Col span={24}>
		<div className={classes.alert}>
			<Alert message={message} description={description} type="warning" showIcon />
		</div>
	</Col>
);

ErrorMessage.propTypes = {
	message: PropTypes.string,
	description: PropTypes.string,
};

export default ErrorMessage;
