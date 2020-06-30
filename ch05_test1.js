var http = require('http');

var server = http.createServer();

var host = '192.168.200.155';
var port = 3000;
//동시에 접속할수 있는 컴퓨터 수 : 50000대
server.listen(port,host, 50000, function(){
    console.log('웹서버가 실행될때 실행되는 함수'+host +port);
});
