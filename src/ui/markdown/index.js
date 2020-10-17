import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'
import Markdown2JSX from 'markdown-to-jsx'

import useMD from './useMD'

export const Markdown = ({ url }) => {
	const { UI, content, load } = useMD()
	const classes = useStyles()

	React.useEffect(() => { load(url) }, [ load, url ])

	if (content == null) {
		return (
			<div className={classes.notReady}>
				<CircularProgress />
			</div>
		)
	}

	return (
		<div className={classes.root}>
			<Markdown2JSX
				options={{
					overrides: {
						code: ({ children }) => (<UI.Code value={children} />),
						table: ({ className, children }) => (
							<table className={`${className} ${classes.table}`}>
								{children}
							</table>
						),
					}
				}}
			>
				{content}
			</Markdown2JSX>
		</div>
	)
}

export default ({ url }) => () => <Markdown url={url} />

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(4)
	},
	notReady: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	table: {
		width: '100%',
		boxSizing: 'border-box',
		borderColor: 'grey',
		borderSpacing: 0,
		borderCollapse: 'collapse',

		'& > thead': {
			textAlign: 'left',
			verticalAlign: 'middle',
		},

		'& tr': {
			borderBottom: '1px solid rgba(81, 81, 81, 1)'
		},

		'& th': {
			padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
		},
		'& td': {
			padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
		},
	}
}))