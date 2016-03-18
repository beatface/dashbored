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
                // console.log("the data coming back!", data);
                res.send(data);
            });
};

module.exports.postNote = (req, res) => {
    let title = req.body.title;
    let note = req.body.content;
    db.run(`INSERT INTO Notes VALUES (NULL, "${title}", "${note}", 1)`, (err) => {
        if (err) throw err;
        res.send('success!');
    });
};

module.exports.showNote = (req, res) => {
    db.all(`SELECT Notes.NoteId, Notes.Title, Notes.Content
            FROM Notes
            WHERE Notes.NoteId = ${req.note};`, (err, data) => {
                if (err) throw err;
                console.log("ONE NOTE", data);
                res.send(data);
            });
};

module.exports.destroyNote = (req, res) => {
    db.run(`DELETE FROM Notes
            WHERE Notes.NoteId = ${req.note}`, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
};

module.exports.update = (req, res) => {
    console.log(">>>>>>>>>>>>>", req.body);
    const title = req.body.title;
    const note = req.body.content;
    db.run(`UPDATE Notes
            SET Notes.Title = '${title}', Notes.Content = '${note}'
            WHERE Notes.NoteId = ${req.note}`, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
};
