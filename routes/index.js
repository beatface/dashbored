"use strict";

const express = require('express');
const router = express.Router();

const notes = require('./notes_routes.js');
const tweets = require('./twitter_routes.js');

router.use(notes);
router.use(tweets);

module.exports = router;
