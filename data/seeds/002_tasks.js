exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([{
          id: 1,
          project_id: 1,
          description: 'Obtain Computer',
          notes: 'Note Test 1',
          completed: 'false'
        },
        {
          id: 2,
          project_id: 1,
          description: 'Obtain License',
          notes: 'Note Test 2',
          completed: 'false'
        },
        {
          id: 3,
          project_id: 1,
          description: 'Obtain Calculator',
          notes: 'Note Test 3',
          completed: 'false'
        },
        {
          id: 4,
          project_id: 1,
          description: 'Obtain Measuring Tape',
          notes: 'Note Test 4',
          completed: 'false'
        },
        {
          id: 5,
          project_id: 1,
          description: 'Obtain Office with Meeting Room',
          notes: 'Note Test 5',
          completed: 'false'
        }
      ]);
    });
};