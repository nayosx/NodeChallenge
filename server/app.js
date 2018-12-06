const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const GITHUB_CLIENT_ID = "4f5b96710cf46dac59ba"
const GITHUB_CLIENT_SECRET = "58b847ba32ceebf1de75f06a6b15cc2dd8d20139";
const SOCIAL_NETWORK = 'github';

var app = express();
var authRoute = require('./routes/auth');
var indexRoute = require('./routes/index');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser( (user, cb) => {
    cb(null, user);
});

passport.deserializeUser( (obj, cb) => {
    cb(null, obj);
});

passport.use(
    new GitHubStrategy({
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile);
        }
    )
);

app.get('/auth/github', passport.authenticate(SOCIAL_NETWORK));

app.get('/auth/github/callback', 
    passport.authenticate(SOCIAL_NETWORK, { failureRedirect: '/error' }),
    (req, res) => {
        //console.log(req.user);
        //res.send(JSON.stringify(req.user, null, '\t'));
        //res.send(req.user);
        res.redirect('/success');
    }
);


app.use('/', authRoute);
app.use('/', indexRoute);
app.use(express.static(__dirname + '/public'));
app.use('/sucess',express.static(__dirname + '/public/welcome.html'));
app.listen(3000);

module.exports = app;