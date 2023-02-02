const router = require(`express`).Router();
const uniqid = require(`uniqid`);
const append = require(`../utils/write.js`);
const deleteObj = require(`../utils/delete.js`)
const read = require(`../utils/read.js`);

router.delete(`/:id`, (req, res) => {
    console.log(`${req.method} request received to ${req.method} note id:${req.params.id}`)
    const db = read()
    const requestedNote = req.params.id;
    // Iterate through the terms name to check if it matches `req.params.term`
    for (let i = 0; i < db.length; i++) {
        if (requestedNote === db[i].id) {
            console.log('note deleted');
            deleteObj(i);
            return res.json(db);
        }
    }
    // Return a message if the term doesn't exist in our DB
    return res.json('No match found');
}
)

router.get(`/`, (req, res) => {
    const db = read()
    console.log(`${req.method} request received to database`);
    return res.json(db);
});

router.post(`/`, (req, res) => {
    console.log(`${req.method} request received to ${req.method} note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid()
        };

        append(newNote)

        res.json(console.log(`${newNote.title} ${newNote.text} ${newNote.id}`))
    } else {
        res.error('Error in adding note');
    }
});

module.exports = router