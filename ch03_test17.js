function add(a,b,c){
    var result=a+b;
    
    //여기서 c를 함수로 지정해주었고 매개변수로 a+b를 넣어주었다. 이로인해 앞으로 add함수를 쓸때는 세번째 매개변수로 함수를 넣어주어야 하고 매개변수가 하나 들어갈수 있다.여기서는 그 매개변수가 a+b이다. 매개변수를 안넣어줘도 되지만 매개변수를 써주면 그 매개변수를 콜백함수에서 사용할수 있다
    c(result);
    
    var count = 0;
    var history = function(){
        count +=1;
        return count +' : '+a +' + '+ b +' = '+ result;
    };
    
    return history;
}

var add_history = add(10,10,function(){
    console.log();
});

console.log(typeof(add_history));
console.log(add_history());
console.log(add_history());
console.log(add_history());