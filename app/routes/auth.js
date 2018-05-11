var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

    app.get('/game', function(req, res){
        res.render("game");
      });

    app.get('/new', function (req, res) {
        res.render("new-game");
    });

    app.get('/join', function (req, res) {
        res.render("join-game");
    });
    
    app.get("/scoreboard", function (req, res) {
        res.render("scoreboard");
    });

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
        failureRedirect: '/signup'}
    ));


    app.get('/dashboard',isLoggedIn, authController.dashboard);


    app.get('/logout',authController.logout);


    app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
        failureRedirect: '/signin'}
    ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}