var person = {};

person.name = '소녀시대';
person['age'] = 20;
person.add = function(a,b){
    return a+b;
};

console.log(person.add(20,20));