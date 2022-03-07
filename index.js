const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')

const folders = fs.readdirSync(path.resolve(__dirname, './')).filter(file => file !== 'node_modules' && !file.includes('.'))

var exports = {}

folders.forEach(folder => {
	exports[folder] = require(path.resolve(__dirname, `./${folder}/index.js`))
});


(async() => {
	
	var data = await 
	axios.get('https://registry.npmjs.org/derpdevs');
	var data = data.data;
	
	var current_version = require(path.resolve(__dirname, './package.json')).version;

	var new_version = data['dist-tags'].latest
	
	if(new_version !== current_version) {

		console.log(`DERPAPI WARNING: Incorrect version for package:\nCurrent: ${current_version}\nNewest: ${new_version}`)
		
	};
	
})();


module.exports = exports