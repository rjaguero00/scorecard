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
            res.redirect('/game');
        });
    },
    createHoleScore: function (req, res) {
        console.log(req.body.userPar);
        console.log(req.body.holeId);
        console.log(req.user);
        var holeScore = req.body.userPar;
        var holeId = req.body.holeId;
        var userId = req.user.id;
        model.HoleScore.create({
            hole_score: holeScore,
            HoleId: holeId,
            userId: userId
        }).then(function (data) {
            console.log(data);
            res.send(data);
        })
            .catch(function (err) {
                console.log("error: ", err);
            })


    }
}


// createHoleScore: function (req, res) {
//     console.log(res.hole);
//     var holeScore = req.body.userPar;
//     var holeId = req.hole.id;
//     var userId = req.user.id;
//     model.Hole.create({
//         hole_score: holeScore,
//         holeId: holeId,
//         userId: userId
//     }).then(function (data) {
//         model.User.create({
//             userId: data.id
//         })
//     })
// }