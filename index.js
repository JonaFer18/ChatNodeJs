var express = require('express');
var socket =require('socket.io');

//app
var app = express();
var port = process.env.PORT;
var server = app.listen(port,function(){

	console.log('aaaa');
})
//static
app.use(express.static('public'));
//socket setup

var io =socket(server);

io.on('connection',function(socket){
	console.log('conexion socket',socket.id);
	socket.on('chat',function(data){
		io.sockets.emit('chat',data);

	});
	socket.on('typing',function(data){
		socket.broadcast.emit('typing',data);
	});
});

