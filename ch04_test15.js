var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');


function timeStampFormat(){
    return moment().format('yyyy-MM-dd HH:mm:ss.SSS ZZ');
}

//winston이 지정해놓은 포맷에 따라 파일을 생성해주고 있다.
var logger = winston.createLogger({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename:'./log/server',
            dataPattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'info',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ]
});

logger.debug('디버깅 메시지입니다.');
logger.error('에러 메시지입니다.');





