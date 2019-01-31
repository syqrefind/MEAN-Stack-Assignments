const http = require('http');
const dt = require('./dateTime');
//console.log("The current date and time are "+ (dt.dateTime.getMonth() + 1) + '-' +  dt.dateTime.getDate() + '-' + dt.dateTime.getFullYear()+ ' '+ dt.dateTime.getHours() + ':' + dt.dateTime.getMinutes() + ':' + dt.dateTime.getMinutes());
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // handling incoming requests here ... 
    if(req){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Server is Running at port 127.0.0.1:${port}\n`);
    }
});
server.listen(port, hostname, () => {
    console.log(`Server is running at http:\/\/${hostname}:${port}\/`);
});


