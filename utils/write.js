// required functions
const fs = require(`fs`);
const path = require(`path`);

// append reads, then adds a new data object to the array using unshift
const append = (newData) => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))

    db.unshift(newData)

    fs.writeFileSync(path.resolve(__dirname, `../db/db.json`), JSON.stringify(dbData), (error, data) => {
        if (error) throw error
        else console.log('written to file')
    })
}

module.exports = append