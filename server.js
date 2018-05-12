var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');


app.get('/', function (req, res) {
  res.render("signin");
});


//Models
var models = require("./app/models");


//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
var authRoute = require('./app/routes/api-routes.js')(app, passport);


//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync({
  // force: true
}).then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});



app.listen(5000, function (err) {
  if (!err)
    console.log("Site is live"); else console.log(err)

});
//https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537