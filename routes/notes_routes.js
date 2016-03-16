"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes_control');

router.param('id', (req, res, next, id) => {
    req.note = id;
    next();
});

router.get('/api/notes', ctrl.index);
router.post('/api/notes', ctrl.postNote);
router.get('/api/notes/:id', ctrl.showNote);
router.delete('/api/notes/:id', ctrl.destroy);
router.get('/api/notes/:id/edit', ctrl.edit);
router.put('/api/notes/:id', ctrl.update);

module.exports = router;
