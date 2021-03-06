const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'dist')))

const routes = require('./routes')

const port = process.env.PORT || '3000'

app.use('/', routes)
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => console.log(`Running on port ${port}`))
