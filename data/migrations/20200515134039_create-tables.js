exports.up = function (knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description')
      table.boolean('completed').defaultTo('false').notNullable()
    })
    .createTable('resources', table => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description')
    })
    .createTable('task', table => {
      table.increments('id')
      table.integer('project_id', 16)
      table.string('description').notNullable()
      table.string('notes')
      table.boolean('completed').defaultTo('false').notNullable()
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};