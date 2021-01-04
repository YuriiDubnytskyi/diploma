const { Router } = require('express');
const router = Router();

module.exports = (passport) => {
	
	router.get('/isAuth',(req,res)=>{
		console.log(req._passport.instance)
		if(req.sessionStore.sessions.passport === undefined){
			 res.json(req.sessionStore.sessions)
		}else if (req.sessionStore.sessions.passport.user !== undefined){
			res.json({status:200,user:req.sessionStore.sessions.passport.user})
		}
		
	})
	
	router.post('/login', function(req, res, next) {
		passport.authenticate('login', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.json( { message: info.message ,err:info.err}) }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				 console.log('is authenticated?: ' + req.isAuthenticated());
				return res.json(user);;
			  });
			
			})(req, res, next);
	  });
	router.post('/sign', function(req, res, next) {
		passport.authenticate('signup', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.json( { message: info.message ,err:info.err}) }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				 console.log('is authenticated?: ' + req.isAuthenticated());
				return res.json(user);;
			  });
			
			})(req, res, next);
	  });
	
	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.writeHead(302, {
			'Location': '/'
		});
		res.end(); 
		res.redirect('http://localhost:3000/');
	});

	

	return router;
}