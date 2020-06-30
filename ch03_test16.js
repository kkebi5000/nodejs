function add(a,b,c){
    var result=a+b;
    c(result);
    
    var history = function(){
        return a + b + result;
    };
    
    return history;
}

var add_history = add(10,10,function(result){
    console.log(result);
});

//typeof는 자바스크립트의 연산자로 자료형을 나타내준다.
console.log(typeof(add_history));
console.log(add_history());