const fs = require(`fs`);
const path = require(`path`);

const append = (data) => {
    const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read')
    }))


    dbData.unshift(data)



    fs.writeFileSync(path.resolve(__dirname, `../db/db.json`), JSON.stringify(dbData), (error, data) => {
        if (error) throw error
        else console.log('written to file')
    })
}

module.exports = append