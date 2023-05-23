module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Chuyenbays", "tgbaydukien", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Chuyenbays", "tgbaydukien", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
    ]);
  },
};
