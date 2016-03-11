"use strict";

const electron = require('electron');
const electronApp = electron.app;
const BrowserWindow = electron.BrowserWindow;

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3153;

// Express routes, views, ctrls
const routes = require('./routes/');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
electronApp.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        electronApp.quit();
    }
});

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(routes);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
electronApp.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false
        },
        width: 840,
        height: 600
    });

    // development error handler
    // will print stacktrace
    if (process.env.NODE_ENV === 'development') {
        app.use(function(err, req, res) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    app.listen(PORT, () => {
        // and load the index.html of the electronApp.
        mainWindow.loadURL('http://127.0.0.1:3153');
        // Open the DevTools.
        mainWindow.webContents.openDevTools();
    });

    // closes server when window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
