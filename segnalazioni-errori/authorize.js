const passport = require('passport')

const authorize = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if(!user || err) {
            res.status(401).send('Non sei autorizzato per questa operazione')
        } else {
            req.user = user;
            next()
        }
    })(req, res, next)
}

module.exports = authorize;