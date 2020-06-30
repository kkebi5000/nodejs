var nconf = require('nconf');

//nconf는 시스템 환경변수에 접근할수 있도록 해주는 모듈이다. nconf.env()함수를 통해 환경변수를 읽어들이고 있다.
nconf.env();

//읽은 환경변수중 OS라는 환경변수를 읽어 value에 담았다.
var value = nconf.get('OS');

console.log(value);