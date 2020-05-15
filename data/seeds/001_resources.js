exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([{
          id: 1,
          name: 'Computer',
          description: 'a computer'
        },
        {
          id: 2,
          name: 'Software License',
          description: 'a license to use software'
        },
        {
          id: 3,
          name: 'Calculator',
          description: 'a calculator'
        },
        {
          id: 4,
          name: 'Measuring Tape',
          description: 'a measuring tape'
        },
        {
          id: 5,
          name: 'Meeting Room',
          description: 'a meeting room'
        }
      ]);
    });
};