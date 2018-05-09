module.exports = function (sequelize, Sequelize) {

    var HoleScore = sequelize.define('holeScore', {
        hole_score_id: {
            autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER
        },
        hole_score: {
            type: Sequelize.INTEGER, notEmpty: true
        }
    }
        , {
            classMethods: {
                associate: function (models) {
                    HoleScore.belongsTo(models.User, { as: 'User' });
                    HoleScore.belongsTo(models.Hole, { as: 'Hole' });
                }
            }
        }
    );

    return HoleScore;

}