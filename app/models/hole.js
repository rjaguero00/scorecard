module.exports = function (sequelize, DataTypes) {
  var Hole = sequelize.define("Hole", {
    hole_number: {
      type: DataTypes.INTEGER,
    },
    par: {
      type: DataTypes.INTEGER,
    },
    hole_distance: {
      type: DataTypes.INTEGER,
    }
  }, {
      timestamps: false
    });

  Hole.associate = function (models) {
    Hole.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Hole;
};
