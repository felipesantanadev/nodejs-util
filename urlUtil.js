const runUrlUtil = () => {
    console.log('\n\n ==== URL Util ==== \n\n')
    const url = require('url');

    const uri = 'https://github.com/felipesantanadev/nodejs-util?someParam1=THATS_MY_PARAM&param2=SECOND_PARAMETER';
    const parsedUrl = url.parse(uri, true);

    console.log(`That is the URL: ${uri}`);
    console.log(`That is the host name: ${parsedUrl.host}`);
    console.log(`That is the path name: ${parsedUrl.pathname}`);
    console.log(`These are the params:`);
    console.log(parsedUrl.query);
    console.log(`That is the "someParam1" parameter: ${parsedUrl.query.someParam1}`);
}

module.exports = runUrlUtil;