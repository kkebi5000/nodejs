var url = require('url');
var urlStr = 'https://www.google.com/search?q=Popcorn&oq=Popcorn&aqs=chrome..69i57j0l6j69i60.4013j0j7&sourceid=chrome&ie=UTF-8';

//url의 속성을 뽑아내는함수 url.parse()
var curUrl = url.parse(urlStr);
console.log(curUrl);
console.dir(curUrl.query);

//parse로 뽑아낸 속성들을 다시 원래 상태로 되돌리는 함수 url.format()
var curStr = console.log(url.format(curUrl));

var querystring = require('querystring');

//쿼리를 뽑아내는 함수 querystring.parse()
var params = querystring.parse(curUrl.query);
console.log(params.q);
console.log(querystring.parse(curUrl.query).query);