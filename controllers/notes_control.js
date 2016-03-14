"use strict";

const NoteModel = require('../models/notes_model');


module.exports.newNote = (req, res) => {
    NoteModel.newNote(req, res);
};

module.exports.postNote = (req, res) => {
    NoteModel.postNote(req, res);
};

module.exports.showNote = (req, res) => {
    NoteModel.showNote(req, res);
};

module.exports.destroy = (req, res) => {
    NoteModel.destroyNote(req, res);
};

module.exports.edit = (req, res) => {
    NoteModel.edit(req, res);
};

module.exports.update = (req, res) => {
    NoteModel.update(req, res);
};
