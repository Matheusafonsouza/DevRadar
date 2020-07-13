//imports
const socketio = require('socket.io');



//config
exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection',  socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);
    });
};
