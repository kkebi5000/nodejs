var EventEmitter = require('events').EventEmitter;
var util = require('util');

var calc = function(){
    //this란 calc를 의미하고on이란 이벤트를 의미한다. calc가 stop이벤트가 발생했을 경우 함수를 실행하라는 의미가 된다.
    this.on('stop',function(){
        console.log('calc에 stop이벤트 전달됨');
    });
};

//util모듈을 통해 calc가 EventEmitter모듈을 상속받도록 하였다.
util.inherits(calc, EventEmitter);

//프로토타입은 하나하나 정의해야하는것을 매개변수만 넣으면 사용할수 있도록 해준다. 마치 자바의 class와 같다. 아래 코드로 인해 calc.add(a,b)함수가 사용가능해졌다.
calc.prototype.add = function(a,b){
    return a+b;
};

//객체를 다른곳에서 사용하기위해 module.exports를 사용하였다. 이 함수를 통해 앞으로 calc는 다른파일에서 require함수를 통해 사용할수 있다. ch04_test4와 이어진다.
module.exports = calc;