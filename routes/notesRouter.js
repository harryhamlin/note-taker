const router = require(`express`).Router();
const db = require(`../db/db.json`);
const uniqid =  require(`uniqid`);
const fs = require(`fs`)

router.get(`/`, (req, res) => {
    res.json(db)
    console.log(`${req.method} request received to ${req.method} note`)
});

router.post(`/`, (req, res) => {
    console.log(`${req.method} request received to ${req.method} note`);
  
    const { title, text } = req.body;
  
      if (req.body) {
          const newNote = {
            title,
            text,
            noteId: uniqid()
          };
          console.log(`${newNote.title} ${newNote.text} ${newNote.noteId}`)
      } else {
          res.error('Error in adding note');
      }
  })

module.exports = router