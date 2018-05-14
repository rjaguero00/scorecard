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
    // // Check to see if hole exists in db
    // getHole: function (req, res) {
    //     model.Hole.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (data) {
    //         res.json(data);
    //     })
    // },
    // Get data from all holes with game id **
    // getAllHoles: function (req, res) {
    //     model.Hole.findAll({
    //         where: {
    //             gameId: req.params.id
    //         }
    //     }).then(function (data) {
    //         res.json(data);
    //     })
    // },
    // // Add hole if doesn't exist in db
    // createHole: function (req, res) {
    //     var currentHoleNum = req.body.currentHole;
    //     var parNum = req.body.par;
    //     model.Hole.create({
    //         hole_number: currentHoleNum,
    //         par: parNum
    //     }).then(function(data) {
    //         res.json(data);
    //     });
    // },
    // // Update hole if numbers don't match db
    // updateHole: function (req, res) {
    //     var currentHoleNum = req.body.currentHole;
    //     var parNum = req.body.par;
    //     model.Hole.update({
    //         hole_number: currentHoleNum,
    //         par: parNum
    //     }).then(function(data) {
    //         res.json(data);
    //     });
    // }
    // ,
    // createHoleScore: function (req, res) {
    //     console.log(req.body);
    //     var holeScoreId = req.body.holeScoreId
    //     var holeScore = req.body.holeScore;
    //     model.Hole.create({
    //         id:
    //     })
    // }

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
// EVELYN
getGame: function (req, res) {
    var playerID = req.user.id;
    model.Game.findOne({
        where: {
            join_id: req.query.join_id
        }
    }).then(function (data) {
        model.UserGame.create({
            userId: playerID,
            GameId: data.id
        })
        res.redirect("/game");
    });
}

}
