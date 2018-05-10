module.exports = function(sequelize, DataTypes) {
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
  
    Hole.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Hole.belongsTo(models.CustomCourse, {
            foreignKey: {
            allowNull: false
            }
        });
    };
  
    return Hole;
  };
  