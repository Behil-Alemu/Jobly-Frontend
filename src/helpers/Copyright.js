import React from 'react';
import { Typography, Box } from '@mui/material';

function Copyright() {
	return (
		<Box mt={5}>
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '}
				Jobly/
				{''}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
}

export default Copyright;
