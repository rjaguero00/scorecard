module.exports = function (sequelize, Sequelize) {

    var CustomCourse = sequelize.define('customcourse', {
        custom_course_id: {
            autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER
        },
        course_name: {
            type: Sequelize.STRING
        },

    }, {
            timestamps: false,

            // Inside the option object, we need a property called "classMethod".
            // This is an object too.
            classMethods: {

                associate: function (models) {
                    // The models parameter is the db object in index.js.
                    // Line 24 in index.js calls this method and passes it
                    // the db object.
                    // This is were we define the association for this model.
                    CustomCourse.hasMany(models.Hole, {
                        // This object is options. You can omit this
                        // parameter and the association will be created
                        // from index.js
                        as: 'Hole',
                        foreignKey: 'custom_courseID'
                    });
                    CustomCourse.hasMany(models.Game, {
                        as: 'Game',
                        foreignKey: 'custom_courseID'
                    })
                }
            }

        });

    return CustomCourse;

}