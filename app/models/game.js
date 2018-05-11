module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    join_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Game.associate = function (models) {
    Game.belongsToMany(models.user, {
      through: 'UserGame'
    });
  };

  return Game;
};