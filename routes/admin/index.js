const express = require('express');
const router = express.Router();

router.get("/login",(req,res,next)=>{
    res.render('login',{ title: '登录' });
})

router.get("/",(req,res,next)=>{
    res.render('main',{ title: '登录' });
})


module.exports = router;