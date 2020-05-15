const express = require("express")

const projectRoute = require("../routes/project")

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use("/api", projectRoute)

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})

module.exports = server