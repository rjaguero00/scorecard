module.exports = function(sequelize, DataTypes) {
    var HoleScore = sequelize.define("HoleScore", {
      hole_score: {
        type: DataTypes.INTEGER,
      }
    }, {
      timestamps: false
    });
  
    HoleScore.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
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