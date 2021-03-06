'use strict';
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("./models/user");
const path = require('path');

//*******************Passport*****************************************
//Passport generateOrFindUser function
function generateOrFindUser(accessToken, refreshToken, profile, done){
  if(profile.emails[0]) {
    User.findOneAndUpdate(
      { email: profile.emails[0].value },
      {
        name: profile.displayName || profile.username,
        email: profile.emails[0].value,
        photo: profile.photos[0].value
      },
      {
        upsert: true
      },
    done
  );
  } else {
    var noEmailError = new Error("Your email privacy settings prevent you from signing into GreenIt.");
    done(noEmailError, null);
  }
}

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://start-the-day.herokuapp.com/api/auth/facebook/return",
  profileFields: ['id', 'displayName', 'photos', 'email']
},
  generateOrFindUser)
);

passport.serializeUser(function(user, done){
	done(null, user._id);
});

passport.deserializeUser(function(userId, done){
	User.findById(userId, done);
});

//*************************/Passport********************************



const API_PORT = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);
//const router = express.Router();

//MongoDB database using mongoose
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/greenit-app", { useNewUrlParser: true });
  const db = mongoose.connection;

// Session Configuration for Passport and MongoDB
var sessionOptions = {
	secret: process.env.SECRET || "this is a super secret dadada",
	resave: true,
	saveUninitialized: true,
  	store: new MongoStore({
  	  mongooseConnection: db
 	})
};

app.use(session(sessionOptions));

//Initialize Passport.js
app.use(passport.initialize());

//Restore session
app.use(passport.session());
db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

// append /api for our http requests
//const router = require('./routes/index');
const auth = require('./routes/auth');
//app.use('/api', router);
app.use('/api/auth', auth);

//Send static file request to client for client and build folder
app.use(express.static(path.join(__dirname, "client", "build")));



// if (process.env.NODE_ENV === "production") {
// app.use(express.static('client/build'));
// }

//app.get("*") is a "catchall" route handler. It's in charge of sending the main index.html file back to the client if it didn't receive a request it recognized otherwise.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.get('/*', (req, res) => {
//   let url = path.join(__dirname, '../client/build', 'index.html');
//   if (!url.startsWith('/app/')) // we're on local windows
//     url = url.substring(1);
//   res.sendFile(url);
// });

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found'
  })
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
