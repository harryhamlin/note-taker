const fs = require(`fs`);
const path = require(`path`);

const deleteObj = (num) => {
    const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))


    dbData.splice(num, 1)



    fs.writeFileSync(path.resolve(__dirname, `../db/db.json`), JSON.stringify(dbData), (error, data) => {
        if (error) throw error
        else console.log('written to file')
    })
}

module.exports = deleteObj