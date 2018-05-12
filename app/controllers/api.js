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


console.log(req.body);
var holeScoreId = req.body.holeScoreId
var holeScore = req.body.holeScore;
model.Hole.create({
    //>>>>>>>>>>>Added this code sample code for testing<<<<<<<<<<<<<<<<<<<//
    id: 1
}).then(function (data) {
    // console.log(req.user);
});
    },



// Find Game where join_id is equal to user-input join-id
// Then create UserGame and set userId as the current user's ID and GameId as the GameId found by user (with join_id)
getGame: function (req, res) {
    model.Game.findOne({
        where: {
            join_id: req.params.join_id
        }
    }).then(function (data) {
        res.json(data);
        model.UserGame.create({
            userId: req.user.id,
            GameId: data.id
        })
        res.redirect("/game");
    });
},

//     }


