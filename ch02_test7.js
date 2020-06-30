//nodejs의 내장모듈로 따로 설치할필요없이 require만 사용하면 된다. 이러한 내장모듈로는 os, path, url, querystring, crypto, util, fs가 있다.
var os = require('os');

console.log(os.hostname());
console.log(os.freemem());