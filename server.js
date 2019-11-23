//StAuth10065: I Kashyap Thakkar, 000742712 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/teacher', function(req, res){  
    res.sendFile(__dirname + '/teacher.html');});

app.get('/student', function(req, res){  
        res.sendFile(__dirname + '/student.html');});
  
  io.on('connection', function(socket) {
        socket.on('question submit', function(msg){    
            io.emit('question submit', msg);  
        });
        socket.on('answer submit', function(data){    
            io.emit('answer submit', data);  
        });
    });
  
  http.listen(3000, function(){  console.log('listening on *:3000');});