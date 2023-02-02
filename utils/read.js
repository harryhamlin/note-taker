// required functions
const fs = require(`fs`);
const path = require(`path`);

// read reads the database and returns the data
const read = () => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))
    
    return db
}

module.exports = read