//process는 node의 내장객체로서 require를 할 필요가 없다. 프로그램과 관련된 정보를 나타내는 객체이다. 이러한 내장객체로는 global, console, 타이머(setTimeout, setInterval, setImmediate 및 clear함수), __filename, __dirname, module, exports, process가 있다.
console.log('argv 속성의 파라미터수 : ' + process.argv.length);

//실행결과 : [ 'C:\\Program Files\\nodejs\\node.exe',  'C:\\reactNative\\nodejs\\NodeExample\\ch02_test2.js' ]
console.dir(process.argv);

//forEach함수는 배열에서 쓸수있다. 구문은 arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])이다. 여기서는 arr.forEach(callback(currentvalue,index))를 사용하였다.
process.argv.forEach(function(currentvalue,index){
    console.log(index + currentvalue);
});

