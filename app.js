const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const users = require('./routes/user');
const goods = require('./routes/good');
const admin = require('./routes/admin/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    next();
});

//配置路由
app.set('views',path.join(__dirname, 'views'));
app.engine("html",require("hbs").__express); 
// app.engine("html",require("html").__express); 
app.set('view engine', 'html');

app.use('/api/users', users);
app.use('/api/goods', goods);

app.use('/admin',admin);
app.use(express.static(path.join(__dirname, 'assets')));

app.listen(3000, () =>
    console.log('启动成功1！')
)
