"use strict";

// set up sqlite schema
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/dashbored.sqlite');


module.exports.index = (req, res) => {
    db.all(`SELECT Notes.NoteId, Notes.Title, Notes.Content
            FROM Notes JOIN UserData
            ON Notes.userid = UserData.userid
            WHERE Notes.userid = UserData.userid;`, (err, data) => {
                if (err) throw err;
                console.log("the data coming back!", data);
                res.send(data);
            });
};

module.exports.postNote = (req, res) => {
    // console.log("the req is", req);
    console.log(req.body);
    // add the new note to the database
    let title = req.body.title;
    let note = req.body.content;
    db.run(`INSERT INTO Notes VALUES (NULL, "${title}", "${note}", 1)`, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

module.exports.showNote = (req, res) => {
    console.log("WHAT IS REQ.NOTE", req.params);
    db.all(`SELECT Notes.NoteId, Notes.Title, Notes.Content
            FROM Notes
            WHERE Notes.NoteId = ${req.note};`, (err, data) => {
                if (err) throw err;
                console.log("ONE NOTE", data);
                res.send(data);
            });
};

module.exports.destroyNote = (req, res) => {
    // remove specific note
    db.run(`DELETE FROM Notes
            WHERE Notes.NoteId = ${req.note}`, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
};

module.exports.edit = (req, res) => {
    // edit specific note
    db.run(`UPDATE Notes
            SET Notes.Title = 'Texas', Notes.Content = ''
            WHERE Notes.NoteId = ${req.note}`, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
};

module.exports.update = (req, res) => {
    // update specific note
};
