const express = require('express')
const db = require('../data/models/project')

const router = express.Router()

router.get('/projects', async (req, res) => {
  try {
    const projects = await db.getProjects()
    res.status(200).json(projects)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.post('/projects', async (req, res) => {
  try {
    const {
      name,
      description
    } = req.body
    const newProject = {
      name,
      description
    }
    if (name && description) {
      const makeProject = await db.addProject(newProject)
      res.status(201).json({
        makeProject
      })
    } else {
      res.status(400).json({
        error: "missing data"
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.get('/resources', async (req, res) => {
  try {
    const resources = await db.getResources()
    console.log(resources)
    res.status(200).json(resources)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.post('/resources', async (req, res) => {
  try {
    const {
      name,
      description
    } = req.body
    const newResource = {
      name,
      description
    }
    if (name && description) {
      const makeResource = await db.addResource(newResource)
      res.status(201).json({
        success: `added resource at id:${makeResource}`
      })
    } else {
      res.status(400).json({
        error: "missing data"
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.getTasks()
    console.log(tasks)
    res.status(200).json(tasks)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.post('/tasks', async (req, res) => {
  try {
    const {
      description,
      notes,
      project_id
    } = req.body
    const newTask = {
      description,
      notes,
      project_id
    }
    if (description && notes && project_id) {
      const makeTask = await db.addTask(newTask)
      res.status(201).json({
        success: `added new task at id:${makeTask}`
      })
    } else {
      res.status(400).json({
        error: "missing data"
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

module.exports = router