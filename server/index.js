var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

//router

const getjson = require('./router/resjson');
const getjsonp = require('./router/resjsonp');
const download = require('./router/resdownload');
const end = require('./router/resend');
const redirectgoogle = require('./router/resrredirect');
const renderview = require('./router/resrender');
const send = require('./router/ressend');
const sendfile = require('./router/ressendfile');
const sendstatus = require('./router/ressendstatus');
const all = require('./router/routerall');


app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.use(express.static('./data'));

app.use('/', express.static(path.join(__dirname, '../views')))

// use router
app.use('/',getjson);
app.use('/',getjsonp);
app.use('/',download);
app.use('/',end);
app.use('/',redirectgoogle);
app.use('/',renderview);
app.use('/',send);
app.use('/',sendfile);
app.use('/',sendstatus);
app.use('/',all);


app.get('/index',function(req,res,next){
    res.status(200).json({ error: 'message' });
})

app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
})
