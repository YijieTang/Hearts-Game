var sio = require("socket.io");
var io = null;

exports.io = function () {
  return io;
};

exports.initialize = function (server) {
  io = sio(server);
  io.on("connection", socket => {
    socket.on("entered", data => {
      io.emit("entry msg", data);
    });

    socket.on("chat", data => {
      io.emit("send msg", data);
      if (data.message.toLowerCase().includes("dong")) {
        io.emit("PLAY DONG");
      }
      if (data.message.toLowerCase().includes("kaca")) {
        io.emit("PLAY KACA");
      }
    });

    socket.on("NUDGE NOTIFICATION", data => {
      io.emit("nudge", data);
    });

    socket.on("typing", data => {
      socket.broadcast.emit("typing msg", data);
    });
  });
  return io;
}