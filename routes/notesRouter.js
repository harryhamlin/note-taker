// required functions
const router = require(`express`).Router();
const uniqid = require(`uniqid`);
const append = require(`../utils/write.js`);
const deleteObj = require(`../utils/delete.js`)
const read = require(`../utils/read.js`);

// delete function searches for note by id number and then deletes the requisite note
router.delete(`/:id`, (req, res) => {
    console.log(`${req.method} request for id:${req.params.id}`);
    // utilizes read() to read the database
    const db = read();
    // iterate through database to find matching note by id, then deletes using the delte() function
    const requestedNote = req.params.id;
    for (let i = 0; i < db.length; i++) {
        if (requestedNote === db[i].id) {
            console.log('note deleted');
            deleteObj(i);
            return res.json(db);
        }
    }
    return res.json('No match found');
});

// gets database array by using the read() function
router.get(`/`, (req, res) => {
    const db = read();
    console.log(`${req.method} request received to database`);
    return res.json(db);
});

// post method to insert new note into database array
router.post(`/`, (req, res) => {
    console.log(`${req.method} request received`);

    // captures parameters from the request body
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid()
        };
        // uses append() function to add the note to the database array
        append(newNote);
        res.json(newNote);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = router