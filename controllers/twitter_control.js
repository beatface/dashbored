"use strict";

const TwitterModel = require('../models/twitter_model');

module.exports.index = (req, res) => {
    TwitterModel.index(req, res);
};

module.exports.loadSearch = (req, res) => {
    TwitterModel.loadSearch(req, res);
};
