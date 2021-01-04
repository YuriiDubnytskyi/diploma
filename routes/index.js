const userRoutes = require("./userRoutes")
const passportRoutes = require("./passportRouter")

module.exports = (app,passport) => {
    app.use('/api/user', userRoutes)
    app.use('/api/auth', passportRoutes(passport))
}