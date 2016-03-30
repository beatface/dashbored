# dashbored

Dashbored is an all-in-one dashboard for users to keep notes, play Snake, view tweets, and use a calculator. Built with Electron, Express, Angular, Node, and SQLite, all widgets are draggable, just like your built-in Mac dashboard. This repo represents the server-side API.

### Purpose
This app was written for my back-end capstone at [Nashville Software School](http://nashvillesoftwareschool.com/).

### Installation

Electron bundled app download coming soon! In the meantime, to download the client-side and start dashboreding:
```
git clone https://github.com/beatface/dashbored-client
npm install
bower install
npm start
```

To install this server-side repo:
Users must sign up for the Twitter API. Create a file called `twit_keys.js` with this format:
```
module.exports = {
    consumer_key:         YOUR_CONSUMER_KEY,
    consumer_secret:      YOUR_CONSUMER_SECRET,
    access_token:         YOUR_ACCESS_TOKEN,
    access_token_secret:  YOUR_ACCESS_TOKEN_SECRET
}
```
Then:
```
git clone https://github.com/beatface/dashbored
npm install
npm start
```
