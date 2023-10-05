const fs = require('fs');
const path = require('path');

const directory = 'question3/Logs';

const addLogs = () => {
    try {
        fs.mkdirSync(directory);

    process.chdir(directory);

    for(let i = 0; i < 10; i++) {
        const logName = `log${i}.txt`;
        const logPath = path.join(process.cwd(), logName);

        fs.writeFileSync(logPath, `Log ${i}`);
    }

    const logs = fs.readdirSync(process.cwd());
    logs.forEach(log => console.log('Created file: ' + log));
    } catch(error) {
        console.log(error);
    }
}

addLogs();