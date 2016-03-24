"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/twitter_control');

router.param('search', (req, res, next, search) => {
    req.twitSearch = search;
    next();
});

router.get('/twitter', ctrl.index);
router.get('/twitter/:search', ctrl.loadSearch);

module.exports = router;
