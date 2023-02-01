const express = require('express');
const path = require(`path`);
const PORT = process.env.PORT || 3001;
const app = express();
const api = require(`./routes/indexRouter.js`);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(`/api`, api);

app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/notes.html`))
})

app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
})

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);