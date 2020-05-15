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
  return db('resources')
}

function addProject(project) {
  return db('projects').insert(project)
}

function getProjects() {
  return db('projects')
}

function addTask(task) {
  return db('task').insert(task)
}

/*
  SELECT task.id, task.description, task.notes, projects.name, projects.description, task.completed
  FROM task
  JOIN projects
  ON task.project_id = projects.id
  */

function getTasks() {
  return db('task')
    .select('task.id', 'task.description', 'task.notes', 'projects.name', 'projects.description', 'task.completed')
    .from('task')
    .join('projects', 'projects.id', '=', 'task.project_id')
}