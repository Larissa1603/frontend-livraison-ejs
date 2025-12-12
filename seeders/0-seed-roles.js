'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Roles', [
      { nom: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'driver', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'client', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Roles', {
      nom: ['admin', 'driver', 'client']
    }, {});
  }
};