"use strict";

const Twit = require('twit');
const twitKeys = require('../twit_keys');

const T = new Twit({
    consumer_key:         twitKeys.consumer_key,
    consumer_secret:      twitKeys.consumer_secret,
    access_token:         twitKeys.access_token,
    access_token_secret:  twitKeys.access_token_secret,
    timeout_ms:           60*1000
});

module.exports.index = (req, res) => {
    T.get('search/tweets', { q: '#puppies', count: 30 }, function(err, data, response) {
        if (err) throw err;
        res.send(data);
    });
};

module.exports.loadSearch = (req, res) => {
    T.get('search/tweets', { q: req.twitSearch, count: 30 }, function(err, data, response) {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
};
