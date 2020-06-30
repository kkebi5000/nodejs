var calc = require('./calc3');

//prototype을 지정해주었기 때문에 new가 사용가능하다.
var calc1 = new calc();

//calc1에 stop이벤트 강제 발생
calc1.emit('stop');

console.log(calc1.add(1,2));
console.log('calc에 stop이벤트 전달함');