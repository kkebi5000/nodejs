//filesystem의 약자 fs
var fs = require('fs');

//fs.readFileSync()함수를 통해 파일을 읽고있다.
var data = fs.readFileSync('./package.json','utf8');
console.log(data);