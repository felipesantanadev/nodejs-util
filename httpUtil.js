const runHttpUtil = () => {
    console.log('\n\n ==== Http Util ==== \n\n')
    const http = require('http');

    const server = http.createServer((request, response) => {
        console.log('Request received...');
        console.log(request);

        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        if(request.url === '/user'){
            response.write('<h1>Hello User!</h1>');
        } else {
            response.write('<h1>Hello Node JS!</h1>');
        }
        response.end();
    });

    server.listen(3000, () => {
        console.log('The server is listening on port 3000...')
    });
}

module.exports = runHttpUtil;