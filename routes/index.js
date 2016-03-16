"use strict";

const express = require('express');
const router = express.Router();

// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('./db/dashbored.sqlite');

const notes = require('./notes_routes.js');

router.use(notes);


module.exports = router;
