const config = {
    // 启动端口
    port: 3000,
    // 数据库配置
    database: {
        DATABASE: 'myinfo',
        USERNAME: 'root',
        PASSWORD: '123456',
        PORT: '3306',
        HOST: '127.0.0.1',
        insecureAuth : true,
        useConnectionPooling: true
    }
}
module.exports = config