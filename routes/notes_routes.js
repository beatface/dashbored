"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes_control');

router.param('id', (req, res, next, id) => {
    req.note = id;
    next();
});

router.get('/notes', ctrl.index);
router.post('/notes', ctrl.postNote);
router.get('/notes/:id', ctrl.showNote);
router.delete('/notes/:id', ctrl.destroy);
router.put('/notes/:id', ctrl.update);

module.exports = router;
