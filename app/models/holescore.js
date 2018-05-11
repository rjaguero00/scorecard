module.exports = function(sequelize, DataTypes) {
    var HoleScore = sequelize.define("HoleScore", {
      hole_score: {
        type: DataTypes.INTEGER,
      }
    }, {
      timestamps: false
    });
  
    HoleScore.associate = function(models) {
      HoleScore.belongsTo(models.Hole, {
        foreignKey: {
          allowNull: false
        }
      }),
      HoleScore.belongsTo(models.user, {
          foreignKey: {
          allowNull: false
          }
      });
    };
  
    return HoleScore;
  };