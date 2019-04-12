const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = require('./routes/user');
const goods = require('./routes/good');

const demo = require('./demo.js');

let Person = new demo("小王12",11);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    next();
});

app.use('/api/users', users);
app.use('/api/goods', goods);
app.use('/static',express.static('public'));

app.listen(3000, () =>
    //console.log('启动成功1！')
    console.log(Person.getName())
)
