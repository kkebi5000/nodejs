//내장모듈
var path = require('path');

var directories = ['Users', 'kkebi', 'docs'];

//배열에서 사용할수있는 함수 join() -> join함수에 매개변수로 아무것도 안넣으면 배열을 ','를 기준으로 이어준다.
var dirStr = directories.join();

console.log (dirStr);

//join함수에 path.sep를 변수로 넣어주면 역슬래시'\'를 기준으로 이어준다.(path.sep=\)
var dirStr2 = directories.join(path.sep);
console.log(dirStr2);

//위의경우는 배열의 join함수여서 매개변수가 구분자로 사용되었지만 여기서는 path의 join함수여서 매개변수가 값(value)으로 사용되었다.
var dirStr3 = path.join('/Users/kkebi', 'notepad.exe');
console.log(dirStr3);