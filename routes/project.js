const express = require('express')
const db = require('../data/models/project')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects()
    console.log(projects)
    res.status(200).json(projects)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

module.exports = router