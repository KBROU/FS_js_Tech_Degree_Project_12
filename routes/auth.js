var express = require('express');
var router = express.Router();
var passport = require('passport');
const CLIENT_HOME = "http://localhost:3000";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

//GET /auth/login/facebook
router.get('/login/facebook',
  passport.authenticate('facebook', {scope: ["email"]}));

//GET /auth/facebook/return
router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: CLIENT_HOME }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/welcome");
  });

//GET /auth/logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
