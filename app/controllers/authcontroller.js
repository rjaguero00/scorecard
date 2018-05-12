var exports = module.exports = {}
var model = require('../models');

exports.signup = function(req,res){
	res.render('signup'); 
}

exports.signin = function(req,res){
  
	res.render('signin'); 
}

exports.dashboard = function(req,res){
        model.user.findOne({
            where: {
                id: req.user.id
            }
        }).then(function (data) {
            console.log(data.dataValues.firstname);
            return res.render("dashboard", {
                user: {
                    firstname: data.dataValues.firstname
                }
            });
        })
    }
//	res.render('dashboard'); 
//}

exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });
}




