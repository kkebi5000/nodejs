console.log('안녕하세요.');  

console.log('안녕하세요.%d',10);
var person = {
    name: '소녀시대'
}
console.log('안녕하세요.%j',person);  

console.dir(person);


console.time('duration_time');
var result = 0;
for(var i =0; i<10000;i++){
    result +=i;
}

console.timeEnd('duration_time');

console.log('파일 이름 : %s', __filename);
console.log('패스 : %s', __dirname);






















