const fs = require(`fs`);
const path = require(`path`);

const append = (newData) => {
    const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))


    dbData.unshift(newData)



    fs.writeFileSync(path.resolve(__dirname, `../db/db.json`), JSON.stringify(dbData), (error, data) => {
        if (error) throw error
        else console.log('written to file')
    })
}

module.exports = append