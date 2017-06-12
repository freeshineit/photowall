const express = require('express');
const router = express.Router();

router.get('/redirect/google',function(req,res,next){
    res.redirect('http://www.google.com')
})

module.exports = router;
