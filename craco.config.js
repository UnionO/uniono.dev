const path = require('path')

module.exports = {
	webpack: {
		alias: {
			react: path.resolve('node_modules', 'react'),
			'react-dom': path.resolve('node_modules', 'react-dom'),
		}
	}
}