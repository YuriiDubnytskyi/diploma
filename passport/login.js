const LocalStrategy   = require('passport-local').Strategy;
const User = require('../models/users');
const bCrypt = require('bcrypt');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password,done) {     
            User.findOne({ 'email' :  req.body.email }, 
                function(err, user) {
               
                    if (err)
                        return done(err);
                 
                    if (!user){
                        console.log('User Not Found with email '+req.body.email);
                        return done(null,false, {message:'User Not Found with email '+req.body.email,err:true});                 
                    }
                 
                    if (!isValidPassword(user, req.body.password)){
                      
                        return done(null,false,  {message:'Invalid Password',err:true} );
                    }

                    return done(null, user);
                }
            );

        })
    );


    var isValidPassword = function(user, password){
        console.log(bCrypt.compareSync(password, user.password))
        return bCrypt.compareSync(password, user.password);
    }
    
}