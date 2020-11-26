let express = require('express');

let app = express();
let server = app.listen(8080);

app.use(express.static('public'));

console.log("Node Server.js is Running.");

let socket = requie('socket.io');

let io = socket(server);

io.sockets.on('connection', newConnection);