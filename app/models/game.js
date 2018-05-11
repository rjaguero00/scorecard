module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
      join_id: {
        type: DataTypes.INTEGER,
      }
    });
  
    Game.associate = function(models) {
        Game.belongsTo(models.CustomCourse, {
            foreignKey: {
            allowNull: false
            }
        });
        Game.belongsToMany(models.user, {
          through: 'UserGame'
        });
    };
  
    return Game;
  };
  