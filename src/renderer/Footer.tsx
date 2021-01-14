import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		margin: 5,
		'&>svg': {
			cursor: 'pointer',
		},
	},
}));

const Footer: React.FC = function () {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<Typography>Modified By: Josh113</Typography>
		</div>
	);
};

export default Footer;
