const express = require('express');
const User = require('../models/userModel');

module.exports = (app) => {
  app.post('/api/signup', (req, res, next) => {
    const { firstName, lastName, username, password } = req.body;
    User.create({ firstName, lastName, username, password }, (err, user) => {
      if (err) {
        return next({
          log: 'Error with creating a new user',
          message: { err: err.message },
        });
      } else {
        res.cookie.userId = user.id;
        res.cookie.userName = user.firstName;
        // localStorage.setItem('userId', JSON.stringify(user.id));
        // localStorage.setItem('userName', JSON.stringify(user.firstName));
        res.status(200).json(user);
      }
    });
  });

  app.post('/api/login', (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
      if (err) {
        return next({
          log: 'Error occurred with logging in. Try again',
          message: { err: err.message },
        });
      } else if (!user) {
        return next({
          log: 'Error occurred with logging in. Try again',
          message: { err: 'Wrong username or password' },
        });
      } else {
        res.cookie.userId = user.id;
        res.cookie.userName = user.firstName;
        // localStorage.setItem('userId', JSON.stringify(user.id));
        // localStorage.setItem('userName', JSON.stringify(user.firstName));
        res.status(200).json(user);
      }
    });
  });
};
