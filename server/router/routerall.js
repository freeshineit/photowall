const express = require('express');
const router = express.Router();

router.all('/routerall', (req, res, next) => {
    res.json({mes:'OK'})
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
})

module.exports = router;
