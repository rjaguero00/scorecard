var apiController = require('../controllers/api.js');

module.exports = function (app, passport) {

    app.get('/api/user/:id', isLoggedIn, apiController.getUser);
    app.get('/api/game/join', isLoggedIn, apiController.getGame);
    app.post('/api/game', isLoggedIn, apiController.createGame);

    app.post('api/scoreboard', isLoggedIn, apiController.createHoleScore);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}