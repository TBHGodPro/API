function login(res, redirect) {

	function loginRedirect(redirect) {
		return 'https://derpdevs.repl.co/api/auth/login?' + new URLSearchParams({redirect:redirect}).toString()
	}

	if(res.location.href) {

		redirect = redirect ? redirect : res.location.href

		res.location.href = loginRedirect(redirect)
		
	} else {

		if(!redirect) {
			console.log('DERPAPI ERROR: NO REDIRECT')
			return
		}

		res.redirect(loginRedirect(redirect))
		
	}
	
}

module.exports = login