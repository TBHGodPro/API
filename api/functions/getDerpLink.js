function getDerpLink(bot, path) {
	return `https://${bot ? `${bot}.` : ''}derpdevs.repl.co${path ? path : ''}`
}

module.exports = getDerpLink