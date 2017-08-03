'use strict';

var localStrategy = require('passport-local').Strategy;
var User = require('../models/users');
var configAuth = require('./auth');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use(new localStrategy({
		clientID: configAuth.localAuth.clientID,
		clientSecret: configAuth.localAuth.clientSecret,
		callbackURL: configAuth.localAuth.callbackURL
	},
	function (token, refreshToken, profile, done) {
		process.nextTick(function () {
			User.findOne({ 'local.id': profile.id }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				} else {
					var newUser = new User();

					newUser.local.id = profile.id;
					newUser.local.username = profile.username;
					newUser.local.displayName = profile.displayName;
					newUser.local.publicRepos = profile._json.public_repos;
					newUser.nbrClicks.clicks = 0;

					newUser.save(function (err) {
						if (err) {
							throw err;
						}

						return done(null, newUser);
					});
				}
			});
		});
	}));
};
