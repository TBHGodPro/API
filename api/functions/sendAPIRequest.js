const axios = require('axios')

async function sendAPIRequest(bot, path, type, data) {
	const url = `https://${bot ? `${bot}.` : ''}derpdevs.repl.co${path ? path : ''}`

	var type = type ? type.toLowerCase() : null
	if(type === null) {console.error('DERPAPI ERROR: NO TYPE INPUT'); return undefined}
	
	if(type === 'get') {
		var urlData = ''
		Object.keys(data).forEach(key => {

			var keyData = ''

			if(data[key] === undefined || data[key] === null) {keyData=null}
				
			else if(data[key].constructor === ({}).constructor || data[key].constructor === [].constructor) {keyData=JSON.stringify(data[key])}
				
			else if(data[key].constructor === 'string'.constructor || data[key].isNaN() === false) {keyData=data[key]}

			else if(data[key] === true) {keyData = true}

			else if(data[key] === false) {keyData = false}
			
			urlData = `${urlData}&${key}=${keyData}`
			
		})

		const returnData = await axios.get(`${url}?${urlData.substr(1)}`).catch(err => {
			if(err.isAxiosError) {return {error:`DERPAPI ERROR: Axios error encountered while fetching data from ${url}`}}
		})
		
		return returnData.data
		
	}
}

module.exports = sendAPIRequest