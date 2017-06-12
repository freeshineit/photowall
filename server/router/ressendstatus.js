const express = require('express');
const router = express.Router();

router.get('/sendstatus',(req,res,next) => {
    res.sendStatus(404);
})

module.exports = router;
