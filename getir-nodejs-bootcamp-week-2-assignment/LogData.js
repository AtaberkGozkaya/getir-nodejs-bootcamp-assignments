const fs = require('fs');
module.exports = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, {'flag':'a'}, err => {
            if(err) reject('couldnt write');
            resolve();
        });
    });
}