module.exports = function(sequelize, DataTypes) {
    var CustomCourse = sequelize.define("CustomCourse", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
    }, {
      timestamps: false
    });
  
    return CustomCourse;
  };
  