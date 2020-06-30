var fs = require('fs');
/*var buffer = new Buffer('하이');
fs.writeFile('./output.txt','Hello.',function(err){
    if(err){
        console.dir('에러발생 : '+err);
        return;
    }
    console.log('데이터쓰기 완료');
});*/

//fs모듈의 파일읽기함수 createReadStream
var infile = fs.createReadStream('./output.txt',{flags:'r'});

//data를 다읽었을때 발생하는 이벤트 'data'
infile.on('data',function(data){
    console.log(data.toString());
});

infile.on('end',function(){
    console.log('읽기종료');
});