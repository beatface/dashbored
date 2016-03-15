"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes_control');


router.get('/notes', ctrl.index);
// router.get('/notes/new', ctrl.newNote);
router.post('/notes', ctrl.postNote);
router.get('/notes/:id', ctrl.showNote);
router.delete('/notes/:id', ctrl.destroy);
router.get('/notes/:id/edit', ctrl.edit);
router.put('/notes/:id', ctrl.update);

module.exports = router;
