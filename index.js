const diContainer = require('./diContainer.js')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

app.use(bodyParser.json())

// business logic
diContainer.register('dbName', 'mysql')
diContainer.register('tokenSecret', '1234')
diContainer.factory('db', require('./DB/db'))
diContainer.factory('authService', require('./authService/service'))
diContainer.factory('authController', require('./authController/controller'))

const controller = diContainer.get('authController')
//

app.get('/', (req, res) => {
	
	res.status(200).json({ message: "Hello world" })
})

app.post('/login',controller.login)
app.post("/checktoken",controller.checkToken)

app.listen(port)


