  
const express = require("express")
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')
const carsRouter = require("./router/cars-router")

const server = express()
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 5000

server.use(logger())
server.use(express.json())

server.use("/api/cars", carsRouter)

server.use(notFound())
server.use(error())

server.listen(port, host, () => {
	console.log(`\nRunning on http://${host}:${port}\n`)
})