var fs = require('fs');

//readFileSync와 달리 readFile은 비동기로 처리된다. 
fs.readFile('./package.json','utf8',function(err, data){
    console.log(data);
});