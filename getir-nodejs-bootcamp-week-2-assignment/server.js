const http = require('http');
const writeLogData = require('./LogData');

const port = 8000;
const hostName = '127.0.0.1';

const logFile = './logs.txt';

const server = http.createServer(async (request, response) => {
    const pathName = request.url;
    if(pathName === '/' || pathName === '/overview')
    {
        response.statusCode = 200;
        await writeLogData(logFile, `Status: ${response.statusCode} Path: ${pathName} on ${new Date().toISOString()}\n`);
        response.end('Overview');
    }
    else if(pathName === '/about')
    {
        response.statusCode = 200;
        await writeLogData(logFile, `Status: ${response.statusCode} Path: ${pathName} on ${new Date().toISOString()}\n`);
        response.end('About');
    }
    else if(pathName === '/Main')
    {
        response.statusCode = 200;
        await writeLogData(logFile, `Status: ${response.statusCode} Path: ${pathName} on ${new Date().toISOString()}\n`);
        response.end('Main');
    }
    else{
        response.statusCode = 404;
        await writeLogData(logFile, `Status: ${response.statusCode} Page not found on ${new Date().toISOString()}\n`);
        response.writeHead(404, {
            'Content-type' :'text/html'
        });
        response.end('<h1>Page not found</h1>');
    }
});
server.listen(port, hostName, () => {
    console.log('listening app');
});