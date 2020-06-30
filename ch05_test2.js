var http = require('http');

var server = http.createServer();

var host = '192.168.200.155';
var port = 3000;
server.listen(port,host,50000,function(){
    console.log('웹서버 실행됨.');
});

//클라이언트가 접속할때 connection이벤트가 발생하고 내부적으로 socket이라는 객체가 만들어진다.
server.on('connection',function(socket){
    console.log('클라이언트가 접속했습니다.');
});

//클라이언트가 req라는 객체를 보내면 res객체로 응답해줄수 있다.
server.on('request',function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    
    //console.dir(res);
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    });
    res.write('<h1>웹서버로부터 받은 응답</h1>');
    res.end();
});