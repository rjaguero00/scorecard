var apiController = require('../controllers/api.js');

module.exports = function (app, passport) {

    app.get('/api/user/:id', isLoggedIn, apiController.getUser);
    app.post('/api/game', isLoggedIn, apiController.createGame);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}