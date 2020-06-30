var person1 ={name:'소녀시대',age:20};
var person2 ={name:'걸스데이',age:21};

function Person(name,age){
    this.name = name;
    this.age = age;
}

//prototype은 위와같이 person을 하나하나 정의해야하는것을 자바의 class와 같이 new를 통해 매개변수만 넣어주면 정의할수 있도록 해준다.
Person.prototype.walk=function(speed){
    console.log(speed);
}

var person3 = new Person('소녀시대',20);
var person4 = new Person('걸스데이',21);

person3.walk(10);