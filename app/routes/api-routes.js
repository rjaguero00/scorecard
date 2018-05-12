var apiController = require('../controllers/api.js');

module.exports = function (app, passport) {

    // User
    app.get('/api/user/:id', isLoggedIn, apiController.getUser);

    // Game
    app.get('/api/game/join', isLoggedIn, apiController.getGame);
    app.post('/api/game', isLoggedIn, apiController.createGame);
    
    // Holes
    // app.get('/api/hole/:id', isLoggedIn, apiController.getHole);
    // app.get('/api/hole/:id', isLoggedIn, apiController.getAllHoles);
    // app.post('/api/hole/:id', isLoggedIn, apiController.createHole);
    // app.put('/api/hole/:id', isLoggedIn, apiController.updateHole);

    // Hole Score
    // app.post('api/scoreboard', isLoggedIn, apiController.createHoleScore);
    // app.put('api/scoreboard', isLoggedIn, apiController.updateHoleScore);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}