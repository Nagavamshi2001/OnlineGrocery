const express = require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const items=require('./routes/items');
const dashboard=require('./routes/dashboard');
const cart=require('./routes/cart');
const app = express();

const dbURI='mongodb+srv://vamshi2001:1234@blogdata.tdm10ab.mongodb.net/grocery?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(dbURI)
.then((result)=> { 
    console.log('connected to DB');
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
})
.catch((err)=>console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','assets');

app.get('/',(req,res)=>{
    res.redirect('/dashboard');
});

app.use(cart);
app.use(dashboard);
app.use(items)

app.use((req,res)=>{
        console.log(req.url);
        res.status(404).render('404',{title: req.url});
});