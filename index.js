require('dotenv').config()

const customExpress = require('./config/expressConfig')

const port = process.env.API_PORT | 3000

const app = customExpress()


app.listen(port, () => console.log(`Server run in port: ${port}`))