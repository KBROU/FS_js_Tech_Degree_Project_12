'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema ({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  favoriteBook: {
    type: String,
    required: false,
    trim: true
  },
  photo: {
    type: String,
    required: true,
    trim: true
}
});

//User model is for the users collection in the database
const User = mongoose.model('User', UserSchema);

module.exports = User;
