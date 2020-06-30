//process에는 tick이라는 이벤트가 없지만 아래에서 임의로 이벤트를 발생시키고 있다.
process.on('tick',function(count){
    console.log('tick이벤트 발생함'+count)
});

setTimeout(function(){
    console.log('2초후에 실행됨');
    
    process.emit('tick','2');
},2000);