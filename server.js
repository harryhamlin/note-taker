// required express paths and functions
const express = require('express');
const path = require(`path`);
const PORT = process.env.PORT || 3001;
const app = express();
const api = require(`./routes/indexRouter.js`);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static hosting
app.use(express.static('public'));

// setting indexRouter to /api
app.use(`/api`, api);

// setting /notes to notes.html
app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/notes.html`))
})

// setting default to index.html
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
})

// listener
app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);