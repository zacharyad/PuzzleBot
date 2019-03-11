'use strict';
const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const app = express();

//middleware
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//get to my api
app.use('/api', require('./api'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Server error');
});

module.exports = app;
