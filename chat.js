var net = require('net');
var sockets = [];

process.on('uncaughtException', function(err){
	console.log("no manejada", err);
});

var server = net.createServer(function (socket) {
      sockets.push(socket);
      socket.write('Bienvenido al Chat ;)\r\n');

      socket.on("data", function(d){
        sockets.forEach(function(v,i){
          if(socket !== v) {
            v.write(d);
          }
        });
      });

      socket.on("end", function(){
          var index = sockets.indexOf(socket);
          delete sockets[index];
      });
});

server.listen(1337, '127.0.0.1');
