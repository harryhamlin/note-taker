const fs = require(`fs`);

// https://stackoverflow.com/questions/61473968/how-to-push-object-inside-an-array-while-writing-to-a-file-in-node-js

// <====== start here ======>
function append() {
    fs.readFile('../../db/db.json', (err, data) => {
        if (err) throw err;
        const dataArray = data;
        console.log(dataArray);
    })
}
append()