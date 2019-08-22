const runFileSystemUtil = () => {
    console.log('\n\n ==== File System Util ==== \n\n')
    const fs = require('fs');

    console.log('Writting in the message.txt file...');
    fs.writeFile('message.txt', 'Hello dear node!', err => {
        if(err) throw err;
        console.log('The message.txt was written...');
    });

    console.log('\nReading the message.txt file...');
    fs.readFile('./message.txt', 'utf8', (err, data) => {
        if(err) throw err;
        console.log(`File content: "${data}"`);
    });
}

module.exports = runFileSystemUtil;