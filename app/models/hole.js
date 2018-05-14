module.exports = function (sequelize, DataTypes) {
  var Hole = sequelize.define("Hole", {
    hole_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "1"
    },
    par: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3"
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
