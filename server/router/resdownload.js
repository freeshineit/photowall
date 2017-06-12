const express = require('express');
const router = express.Router();

router.get('/download',function(req,res){  //下载
    console.log('lick','/download')
    res.json({ user: 'tobi' });
    // res.download(path.join(__dirname, './timg.jpeg'));
})

router.get('/downloadout',function(req,res){  //下载
    console.log('lick','/downloadout')
    res.download(path.join(__dirname, './timg.jpeg'),'ouput.png');
})

router.get('/downloadoutback',function(req,res){  //下载并反馈
    console.log(req)
    res.download(path.join(__dirname, './timg.jpeg'),'ouput.png',function(err) {
        if(err){

        }else{

        }
        console.log(err);
    })
})

module.exports = router;

//这个有问题   不知道为什么   在index.js文件中国年配置download文件下载路由就没有问题;
