exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
          id: 1,
          name: 'Project 1',
          description: 'The First Project',
          completed: 'false'
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'The Second Project',
          completed: 'false'
        },
        {
          id: 3,
          name: 'Project 3',
          description: 'The Third Project',
          completed: 'false'
        },
        {
          id: 4,
          name: 'Project 4',
          description: 'The Fourth Project',
          completed: 'false'
        },
        {
          id: 5,
          name: 'Project 5',
          description: 'The Fifth Project',
          completed: 'false'
        }
      ]);
    });
};