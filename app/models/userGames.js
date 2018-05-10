module.exports = function (sequelize, DataTypes) {

    var UserGame = sequelize.define('UserGame', {
        id: {
            autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });

    return UserGame;

}