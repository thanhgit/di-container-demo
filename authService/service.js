module.exports = (db, tokenSecret) => {
	const service = {}
	service.login = (username, password) => {
		var isUsername = db.username == username
		var isPassword = db.password == password
		if(isUsername && isPassword){
			return tokenSecret
		}
		return ""
	}

	service.checkToken = (token) => {
		var isToken = token == tokenSecret
		if(isToken) return true
		return false
	}

	return service
}
