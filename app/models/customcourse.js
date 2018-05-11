module.exports = function(sequelize, DataTypes) {
    var CustomCourse = sequelize.define("CustomCourse", {
      // Giving the CustomCourse model a name of type STRING
      name: DataTypes.STRING,
    }, {
      timestamps: false
    });
  
    return CustomCourse;
  };
  