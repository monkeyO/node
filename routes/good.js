const express = require('express');
const router = express.Router();
const connection = require('../dbServer');

router.post("/add", (req, res) => {
    const paramId = req.body.id;
    const sqlStr = `select * from plugin where dl=${paramId}`;
    connection.query(sqlStr, (err, results) => {
        if (err) {
            res.json({ err_code: 1, message: '获取失败', affectedRows: 0 })
        } else {
            res.json({ code: 200, message: '获取成功1', data: results })
        }
    })
});
module.exports = router;