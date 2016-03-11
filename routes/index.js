"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This seems to be working!');
});


module.exports = router;
