const router = require(`express`).Router()
const db = require(`../db/db.json`)
const uniqid =  require(`uniqid`);


router.get(`/`, (req, res) => {
    res.json(db)
    console.log(`${req.method} request received to ${req.method} note`)
});

router.post(`/`, (req, res) => {
    console.log(`${req.method} request received to ${req.method} note`)
})

// router.delete(`/`)

module.exports = router