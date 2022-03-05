const pathPackage = require('path')

function getPath(dirname, path) {
	return pathPackage.resolve(dirname, path)
}

module.exports = getPath