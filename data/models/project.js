const db = require('../dbConnection')

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
}

function addResource(resource) {
  return db('resources').insert(resource)
}

function getResources() {
  return db('resources').select('*')
}

function addProject(project) {
  return db('projects').insert(project)
}

function getProjects() {
  return db('projects').select('*')
}

function addTask(task) {
  return db('tasks').insert(task)
}

function getTasks() {
  return db('tasks').select('*')
}