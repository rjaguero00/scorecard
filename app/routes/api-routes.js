var apiController = require('../controllers/api.js');

module.exports = function (app, passport) {

    // User
    app.get('/api/user/:id', isLoggedIn, apiController.getUser);

    // Game
    app.get('/api/game/join', isLoggedIn, apiController.getGame);
    app.post('/api/game', isLoggedIn, apiController.createGame);

    //Holes
    app.get('/api/hole/:hole?/:GameId?', isLoggedIn, apiController.getHole);

    //Hole Score
    app.get('/api/scoreboard/:hole?/:GameId?/:displayScore?', isLoggedIn, apiController.updateScore);
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}