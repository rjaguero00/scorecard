module.exports = function (sequelize, Sequelize) {

    var UserGame = sequelize.define('userGame', {
        user_game_id: {
            autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER
        },

    }, {
            timestamps: false,

            // Methods to run on models
            classMethods: {

                associate: function (models) {
                    // The models parameter is the db object in index.js.
                    // Line 24 in index.js calls this method and passes it
                    // the db object.
                    // This is were we define the association for this model.
                    UserGame.belongsTo(models.User, {
                        // This object is options. You can omit this
                        // parameter and the association will be created
                        // from index.js
                        as: 'User',
                        foreignKey: 'user_id'
                    });
                    UserGame.belongsTo(models.Game, {
                        as: 'Game',
                        foreignKey: 'game_id'
                    });
                }
            }
        });


    return UserGame;

}