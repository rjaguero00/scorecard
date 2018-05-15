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
        var gameId = req.body.gameId
        var course = req.body.courseName;
        model.Game.create({
            join_id: gameId,
            course_name: course
        }).then(function (data) {
            console.log("CREATE GAME: ");
            console.log('1.) GAME CREATED');
            model.UserGame.create({
                userId: req.user.id,
                GameId: data.id
            }).then(function (data){
                console.log("2.) USER-GAME CREATED")
                model.Hole.create({
                    GameId: data.GameId
                })
                console.log('3.) HOLE CREATED');
                return res.render("game",{
                    Game: {
                        GameId: data.GameId
                    }
                });
                // res.redirect('/game');
            });
        
           
        })
    },

    getHole: function(req, res){
        console.log(req.params);
        console.log(req.user);
        console.log("--------------");
        var gameId = req.params.GameId;
        var holeNumber = req.params.hole;
        model.Hole.findOne({
            where: {
                GameId: gameId,
                hole_number: holeNumber
            }
        }).then(function (data) {
            if(!data){
                console.log("CREATE HOLE (no hole found):")
                model.Hole.create({
                    GameId: gameId,
                    hole_number: holeNumber
                }).then(function(data){
                    console.log("1.) Created hole with DATA ID: ")
                    console.log(data.id);
                });
            }else{
                console.log("hole with that game id already exists.")
            }
        });
        
    },

    updateScore: function (req, res) {
        var gameId = req.params.GameId;
        var holeNumber = req.params.hole;
        var holescore = req.params.displayScore;
        console.log("--------------------");
        console.log(gameId);
        console.log(holeNumber);
        console.log("VVVVVVVVVVVVV");
        model.Hole.findOne({
            where: {
                GameId: gameId,
                hole_number: holeNumber
            }
        }).then(function (data) {
            var dataid = data.id;
            console.log("*****");
            console.log(data.id);
            console.log("****");
            //console.log(data.id);
            console.log("^^^^^^^^^^^^^^^")
            //var holeid = data.dataValues.id;
            model.HoleScore.findOne({
                where: {
                    HoleId: dataid,
                    UserId: req.user.id
                }    
            }).then(function(data){
                if (!data) {
                    console.log("NO HOLE SCORE FOUND.  CREATING HOLE SCORE.")
                    model.HoleScore.create({
                        HoleId: dataid,
                        hole_number: holeNumber,
                        hole_score: holescore,
                        userId: req.user.id
                    }).then(function (data) {
                        console.log("");
                        console.log("CREATED HOLE SCORE DATA: ");
                        console.log("HoleId: ")
                        console.log(data.HoleId);
                        console.log("hole_score: ")
                        console.log(data.hole_score);
                        console.log("=======================================");
                        console.log('');
                    });
                } else {
                    console.log("");
                    console.log("THERE'S SOMETHING TO UPDATE.  HERE'S CALLBACK DATA: ")
                    //console.log(data);
                    //console.log(data.id);
                    //console.log(holescore);
                    console.log("**************************************");
                    console.log("");
                    model.HoleScore.update(
                    {
                        hole_score: holescore,
                    },
                    {
                        where: {
                               id: data.id
                            }
                    }
                )}
            });
        });
    },

    getGame: function (req, res) {
        var playerID = req.user.id;
        model.Game.findOne({            
            where: {
                join_id: req.query.join_id
            }
        }).then(function (data) {
            console.log(data);
            model.UserGame.create({
                userId: playerID,
                GameId: data.id
            }).then(function(data){
                res.render("game", {
                    Game: {
                        GameId: data.GameId
                    }
                });
            });
        })
    }

}