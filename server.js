const Express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require("./auth");
const app = Express();
let server = require('http').Server(app);
const bcrypt = require('bcryptjs');

app.set('view engine','ejs');




app.use(auth);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.render('home');
    // res.sendFile(__dirname+"/index.html");
});
app.get('/getproduct/:id([0-9]{1,100})',(req,res)=>{
    let a=req.params;
    //console.log(a);
    res.render('getproduct',{
        id:a
    })
});
app.get('/admin',(req,res)=>{
    res.sendFile(__dirname+"/views/admin.html");
})
app.get('/user',(req,res)=>{
    res.sendFile(__dirname+'/views/user.html');
})
app.get('/store/:id([a-zA-Z0-9]{1,1000})',(req,res)=>{
    res.render('store',{
        id:req.params
    })
})



const mongoose=require('mongoose');
mongoose.connect("mongodb://du.nm165913:du20091998@ds115753.mlab.com:15753/tmdt",{ useNewUrlParser: true } );



const api=require('./router/api');
app.use('/api',api);





server.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on 3000");
})

