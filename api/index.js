const fs = require('fs-extra')
const path = require('path')

const functions = fs.readdirSync(path.resolve(__dirname, './functions'))

var funcExports = {}

functions.forEach(func => {
	funcExports[func.substr(0, func.length-3)] = require(path.resolve(__dirname, `./functions/${func}`))
})

const dataExports = {
	baseUrl: 'https://derpdevs.repl.co',
}

module.exports = {...dataExports, ...funcExports}