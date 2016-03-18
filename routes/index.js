"use strict";

const express = require('express');
const router = express.Router();

const notes = require('./notes_routes.js');

router.use(notes);

module.exports = router;
