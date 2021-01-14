import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { shell } from 'electron';

const SupportLink: React.FC = function () {
	return (
		<Typography align="center">
			Need help?{' '}
			<Link
				href="#"
				color="secondary"
				onClick={() => shell.openExternal('https://discord.gg/Va4JusVh')}
			>
				Get support
			</Link>
		</Typography>
	);
};

export default SupportLink;
