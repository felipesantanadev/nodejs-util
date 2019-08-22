const runPathUtil = () => {
    console.log('\n\n ==== Path Util ==== \n\n')
    const path = require('path');

    const fileLocation = path.join(__dirname, 'README.md');
    console.log(`README file location: ${fileLocation}`);

    const fileName = path.basename(fileLocation);
    console.log(`Basename of the filelocation "${fileLocation}": ${fileName}`);

    const fileExtension = path.extname(fileName);
    console.log(`Extension of file file ${fileName}: ${fileExtension}`);
}

module.exports = runPathUtil;
