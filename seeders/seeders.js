'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Benchmarks',
      [
        {
          id: 1,
          name: '1st Job Application',
          description: '1st Job Application',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 2,
          name: '5th Job Application',
          description: '5th Job Application',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 3,
          name: '20th Job Application',
          description: '20th Job Application',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 4,
          name: '1st Interview',
          description: '1st Interview',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 5,
          name: '5th Interview',
          description: '5th Interview',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 6,
          name: '20th Interview',
          description: '20th Interview',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 7,
          name: '1st Thank You Letter',
          description: '1st Thank You Letter',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 8,
          name: '5th Thank You Letter',
          description: '5th Thank You Letter',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 9,
          name: '20th Thank You Letter',
          description: '20th Thank You Letter',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 10,
          name: '1st Offer',
          description: '1st Offer',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 11,
          name: '5th Offer',
          description: '5th Offer',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 12,
          name: '20th Offer',
          description: '20th Offer',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 13,
          name: '1st Job Acceptance',
          description: '1st Job Acceptance',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 14,
          name: '5th Job Acceptance',
          description: '5th Job Acceptance',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 15,
          name: '20th Job Acceptance',
          description: '20th Job Acceptance',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          id: 16,
          name: '1st Denial',
          description: "You got this! Don't give up!",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Benchmarks', null, {});
  }
};
