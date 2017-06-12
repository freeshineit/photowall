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

//middleware

const appmiddleware = require('./router/middleware/app-middleware')

// error middleware  必须使用这 4 个参数
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send('Something broke!');
});

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


//middleware

app.use('/',appmiddleware);




app.get('/index',function(req,res,next){
    res.status(200).json({ error: 'message' });
})

app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
})
