//nodejs를 프로세스가 하나의 결과로 종료하려고 할때 exit이벤트가 발생한다. 이 이벤트가 발생할때 수행되는 동작을 지정하고 싶으면 아래와같이 process.on('exit',function(){})을 해주면 된다.
process.on('exit', function(){
    console.log('exit이벤트 발생함');
});

setTimeout(function(){
   console.log('2초후에 실행되었음');
    
    process.exit();
},2000);

console.log('2초후에 실행될 것임');