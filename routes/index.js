"use strict";

const express = require('express');
const router = express.Router();

// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('./db/dashbored.sqlite');

const notes = require('./notes_routes.js');

router.use(notes);

// router.get('/', (req, res) => {
//     // db.run(`CREATE TABLE "Notes" (
//     // 	"noteid"	INTEGER NOT NULL,
//     // 	"title"	TEXT,
//     // 	"content"	TEXT,
//     // 	"userid"	INTEGER NOT NULL,
//     // 	PRIMARY KEY(noteid)
//     // );`);
//     //
//     // db.run(`CREATE TABLE "UserData" (
//     // 	"UserId"	INTEGER NOT NULL,
//     // 	"Timezones"	INTEGER,
//     // 	"Weather"	INTEGER,
//     // 	"NoteId"	INTEGER,
//     // 	PRIMARY KEY(UserId)
//     // );`);
//     db.run(`INSERT INTO UserData VALUES (NULL, "timezone", "weather", 1)`, (err) => {
//         if (err) throw err;
//     });
//     res.render('This seems to be working!');
// });


module.exports = router;
