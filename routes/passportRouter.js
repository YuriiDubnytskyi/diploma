const { Router } = require("express");
const router = Router();

module.exports = (passport) => {
    router.post("/login", function (req, res, next) {
        passport.authenticate("login", function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({ message: info.message, err: info.err });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                console.log("is authenticated?: " + req.isAuthenticated());
                return res.json(user);
            });
        })(req, res, next);
    });
    router.post("/sign", function (req, res, next) {
        passport.authenticate("signup", function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({ message: info.message, err: info.err });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                console.log("is authenticated?: " + req.isAuthenticated());
                return res.json(user);
            });
        })(req, res, next);
    });

    router.get("/signout", function (req, res) {
        req.logout();
        console.log(req.session);
        req.session.destroy();
        res.redirect("/login");
    });

    return router;
};
