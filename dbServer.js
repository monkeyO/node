
let dbConfig = require('./dbConfig');
let mysql = require('mysql');

var connection = mysql.createConnection({
    host: dbConfig.database.HOST, //主机
    user: dbConfig.database.USERNAME,     //数据库用户名
    password: dbConfig.database.PASSWORD,     //数据库密码
    port: dbConfig.database.PORT,
    database: dbConfig.database.DATABASE, //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

module.exports = connection
