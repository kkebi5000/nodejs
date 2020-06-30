var users=[{name : '소녀시대', age:20},{name : '소녀', age:22}];

for(var i = 0; i<users.length; i++){
    console.log(i + users[i].name);
}

users.forEach(function(elt, i){
   console.log(i + elt.name) 
});