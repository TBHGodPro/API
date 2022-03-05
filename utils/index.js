const fs = require('fs-extra')
const path = require('path')
const utils = require('util')

const functions = fs.readdirSync(path.resolve(__dirname, './functions'))

var funcExports = {}

functions.forEach(func => {
	funcExports[func.substr(0, func.length-3)] = require(path.resolve(__dirname, `./functions/${func}`))
})

funcExports.fs = fs
funcExports = {
	...funcExports,
	...utils
}

module.exports = funcExports