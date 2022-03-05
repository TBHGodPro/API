const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const { execFileSync } = require('child_process');

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
	
	if(data['dist-tags'].latest !== current_version) {
		
		console.warn(`NPM PACKAGE: DERPDEVS: CURRENT VERSION: ${current_version}, LATEST VERSION: ${data['dist-tags'].latest}.`);
		
		console.warn('UPDATING DERPDEVS PACKAGE...');

		
		execFileSync(path.resolve(__dirname, './update.sh'));

		
	};
	
})();


module.exports = exports