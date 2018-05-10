module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
      join_id: {
        type: DataTypes.INTEGER,
      }
    });
  
    Game.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Game.belongsTo(models.CustomCourse, {
            foreignKey: {
            allowNull: false
            }
        })
    };
    Game.associate = function(models) {
        Game.belongsToMany(models.user, {
          through: 'UserGame'
        });
    };
  
    return Game;
  };
  