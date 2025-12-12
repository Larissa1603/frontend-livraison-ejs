'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Statuts', [
      { nom: 'en attente', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'en cours', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'livré', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Statuts', {
      nom: ['en attente', 'en cours', 'livré']
    }, {});
  }
};