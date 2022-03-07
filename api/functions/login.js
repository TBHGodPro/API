function login(res, redirect) {

	function loginRedirect(redirect) {
		return 'https://derpdevs.repl.co/api/auth/login?' + new URLSearchParams({redirect:redirect}).toString()
	}

	if(!res) {
		console.log('DERPAPI ERROR: No response/window input')
		return
	}

	if(res.location.href) {

		redirect = redirect ? redirect : res.location.href

		res.location.href = loginRedirect(redirect)
		
	} else {

		redirect = redirect ? redirect : res.req.hostname

		res.redirect(loginRedirect(redirect))
		
	}
	
}

module.exports = login