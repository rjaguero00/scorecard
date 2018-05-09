module.exports = function (sequelize, Sequelize) {

    var Hole = sequelize.define('hole', {
        hole_id: {
            autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER
        },
        hole_number: {
            type: Sequelize.INTEGER
        },
        par: {
            type: Sequelize.INTEGER
        },
        hole_distance: {
            type: Sequelize.INTEGER
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
                    Hole.belongsTo(models.CustomCourse, {
                        // This object is options. You can omit this
                        // parameter and the association will be created
                        // from index.js
                        as: 'CustomCourse',
                        foreignKey: 'custom_courseID'
                    });
                    Hole.hasMany(models.Holescore, { as: "HoleScores" })
                }
            }
        });

    return Hole;

}