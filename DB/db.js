module.exports = dbName =>  {
	if(dbName == "mysql"){
		return {
			token: "1234",
			username: "mysql",
			password: "mysql"
		}
	}else if (dbName == "mongodb"){
		return {
			token: "2345",
			username: "mongodb",
			password: "mongodb"
		}
		
	}else{
		return {
			token: "3456",
			username: "nothing",
			password: "nothing"
		}
	}
}
