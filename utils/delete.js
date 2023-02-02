// required functions
const fs = require(`fs`);
const path = require(`path`);

// deleteObj takes parameter num, the array location, and removes it from the array using the splice function
const deleteObj = (num) => {
    const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/db.json`), (error, data) => {
        if (error) throw error
        else console.log('read');
    }))


    dbData.splice(num, 1)



    fs.writeFileSync(path.resolve(__dirname, `../db/db.json`), JSON.stringify(dbData), (error, data) => {
        if (error) throw error
        else console.log('written to file')
    })
}

module.exports = deleteObj