# FS_js_Tech_Degree_Project_12
Final Project for Treehouse Full Stack Tech Degree. Web application that gives you information to start the day.

## Running App Locally
### Install Required NPM Packages
Open console with Node.js installed and enter `npm install`<br>
This will install all required packages, could take several minutes to complete.

### Create an .env file inside the backend folder
This file should contain the Facebook Developer ID and Secret as formatted below:<br>
FACEBOOK_APP_ID=Your ID Here<br>
FACEBOOK_APP_SECRET=Your APP Secret Here<br>
Visit https://developers.facebook.com/docs/apps for more information<br>

### Create an .env file inside the client folder
This file should contain the Google Maps API and DarkSky API as formatted below:<br>
REACT_APP_GOOGLE_APIKEY=Your Google API Here
REACT_APP_DarkSky_APIKEY=Your DarkSky API Here
Visit https://developers.google.com/maps/documentation/javascript/get-api-key for more information.<br>
Visit https://darksky.net/dev for more information.

### Setting up Facebook Login settings
Create a Facebook App at https://developers.facebook.com <br>
Go to basic settings and add `http://localhost:3001/` to Site URL <br>
In sever.js update the Facebook Passport Strategy as shown below: <br>
`passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3001/api/auth/facebook/return",
  profileFields: ['id', 'displayName', 'photos', 'email']`

### MongoDB
If MongoDB is not installed, you can install MongoDB from https://www.mongodb.com/download-center/community
Once MongoDB is installed open console and locate file of cloned project repo and enter `mongod`

### Running App With NPM start
Open another console with Node.js installed and enter `npm start`<br>
Runs the app in the development mode.<br>
Open another console and navigate to the client folder and enter `npm start`<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Operating Web App
This is a simple app that allows user to login through Facebook Passport using OAuth2 Tokens.
The user is welcomed and Weather and Traffic Map of hard coded location is displayed.
