const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {});

server.listen(port, () => {
    console.log('Server running at port ' + port);
});

