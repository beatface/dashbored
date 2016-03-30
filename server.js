"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3153;

// Express routes, views, ctrls
const routes = require('./routes/');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
