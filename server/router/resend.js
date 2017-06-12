const express = require('express');
const router = express.Router();

router.get('/end',function(req,res,next){
    res.status(404).end();
})


module.exports = router;
