var authController = require('../controllers/authcontroller.js');
var model = require('../models');

module.exports = function (app, passport) {


    app.get('/hole', function (req, res) {
        res.render("game");
    });

    app.get('/new', function (req, res) {
        generateRandGameId(req, res);
    });

    app.get('/join', function (req, res) {
        displayUserName(req, res);
    });

    app.get("/scoreboard", function (req, res) {
        res.render("scoreboard");
    });

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }
    ));


    app.get('/dashboard', isLoggedIn, authController.dashboard);
   


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
    function generateRandGameId(req, res) {
        var str = randomString(5);
        model.Game.findAll({
            where: {
                join_id: str
            }
        }).then(function (data) {
            if (data[0] == undefined) {
                return res.render("new-game", {
                    game: {
                        id: str
                    }
                });
            }
            else {
                generateRandGameId();
            }
        })
    }

    var randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    function displayUserName(req, res){
        model.user.findOne({
            where: {
                id: req.user.id
            }
        }).then(function (data) {
            console.log(data.dataValues.firstname);
            return res.render("join-game", {
                user: {
                    firstname: data.dataValues.firstname
                }
            });
        })
    }

}