const fs = require('fs');
const path = require('path');

const directory = 'question3/Logs';

const removeLogs = () => {
    try {
        const logs = fs.readdirSync(directory);

        logs.forEach(log => console.log('Deleted file: ' + log));

        logs.forEach(log => {
            fs.unlinkSync(path.join(directory, log));
    });

    fs.rmdirSync(directory);
    }
    catch(error) {
        console.log(error);
    }
}

removeLogs();