const fs = require(`fs`);
const path = require(`path`);

const readDb = () => {
    const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))
    
    return dbData
}

module.exports = readDb