const express = require('express');
const router = express.Router();
const connection = require('../dbServer');

router.get("/get", (req, res) => {
    const paramAge = req.body.age;
    const sqlStr = `select * from user where age = "12"`;
    connection.query(sqlStr, (err, results) => {
        if (err) {
            res.json({ code: 202, message: '获取失败', data: err })
        } else {
            res.json({ code: 200, message: '获取成功', data: results })
        }
    })
});

router.post("/add", (req, res) => {
    const paramName = req.body.name;
    const paramAge = req.body.age;
    const sqlStr = `insert into user(name,age) values ("${paramName}","${paramAge}")`;
    connection.query(sqlStr, (err, results) => {
        if (err) {
            res.json({ code: 202, message: '添加失败', data: err })
        } else {
            res.json({ code: 200, message: '添加成功', data: results })
        }
    })
});

module.exports = router;