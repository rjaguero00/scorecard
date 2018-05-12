var model = require('../models');
module.exports = {
    getUser: function (req, res) {
        model.user.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        })

    },
    createGame: function (req, res) {
        console.log(req.body);
        var gameId = req.body.gameId
        var course = req.body.courseName;
        model.Game.create({
            join_id: gameId,
            course_name: course
        }).then(function (data) {
            console.log(req.user);
            model.UserGame.create({
                userId: req.user.id,
                GameId: data.id
            });
            res.redirect('/hole');
        });
    },
    addHoles: function (req, res) {
        console.log(req.body);
        var currentHoleNum = req.body.currentHole;
        var parNum = req.body.par;
        model.Hole.create({
            hole_number: currentHoleNum,
            par: parNum
        }).then(function(data) {
            console.log(req.user);
        });
    }
    // ,
    // createHoleScore: function (req, res) {
    //     console.log(req.body);
    //     var holeScoreId = req.body.holeScoreId
    //     var holeScore = req.body.holeScore;
    //     model.Hole.create({
    //         id:
    //     })
    // }
}