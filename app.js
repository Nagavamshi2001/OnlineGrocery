const express = require('express');
const app = express();
const morgan=require('morgan');
const mongoose=require('mongoose');

// const dbURI='mongodb+srv://vamshi2001:1234@blogdata.tdm10ab.mongodb.net/grocery?retryWrites=true&w=majority';
// mongoose.set('strictQuery', true);
// mongoose.connect(dbURI)
// .then((result)=> { 
//     console.log('connected to DB');
// })
// .catch((err)=>console.log(err));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','assets');


app.get('/',(req,res)=>{
    res.redirect('/dashboard');
});

app.get('/cart',(req,res)=>{
    const blogs = [
        { qty:"1", title: 'Eggs', description: "12 eggs in a Pack", ActualPrice: "360", discount: "10%", Price: "324", imagelink: "https://www.blendernation.com/wp-content/uploads/2019/05/image22-2-728x336.jpg" },
        { qty:"1", title: 'Milk', description: "A gallon of milk", ActualPrice: "400", discount: "10%", Price: "360", imagelink: "https://i.ytimg.com/vi/DKOWa40j0Jg/hq720.jpg?sqp=-oaymwEiCNAFENAFSFryq4qpAxQIARUAAAAAJQAAyEI9AICiQ9ABAQ==&rs=AOn4CLDeM8ZpKlDXcs4E3c6ppYYPonxvSw" },
        { qty:"1", title: 'Bread', description: "12 eggs in a Pack", ActualPrice: "150", discount: "10%", Price: "135", imagelink: "https://static01.nyt.com/images/2015/04/30/dining/29BIGAPPETITE/29BIGAPPETITE-superJumbo.jpg" },
    ];
    res.render('cart',{blogs});
});
app.get('/items/:dynamic', (req, res) => {
    const dynamicValue = req.params.dynamic;
    const blogs = [
        { title: 'Eggs', description: "12 eggs in a Pack", ActualPrice: "360", discount: "10%", Price: "324", imagelink: "https://www.blendernation.com/wp-content/uploads/2019/05/image22-2-728x336.jpg" },
        { title: 'Milk', description: "A gallon of milk", ActualPrice: "400", discount: "10%", Price: "360", imagelink: "https://i.ytimg.com/vi/DKOWa40j0Jg/hq720.jpg?sqp=-oaymwEiCNAFENAFSFryq4qpAxQIARUAAAAAJQAAyEI9AICiQ9ABAQ==&rs=AOn4CLDeM8ZpKlDXcs4E3c6ppYYPonxvSw" },
        { title: 'Bread', description: "12 eggs in a Pack", ActualPrice: "150", discount: "10%", Price: "135", imagelink: "https://static01.nyt.com/images/2015/04/30/dining/29BIGAPPETITE/29BIGAPPETITE-superJumbo.jpg" },
    ];
    res.render('items', { blogs, dynamicValue });
});

app.get('/dashboard',(req,res)=>{
    const Items=[
        {title:'Vegetables', url:"https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg", alt:"Vegetables" },
        {title:'Fruits', url:"https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/325253_2200-732x549.jpg", alt:"fruits" },
        {title:'Dairy products', url:"https://farelabs.com/wp-content/uploads/file77g20u0t0t113er7c6s7-1570908395-768x455-1.webp", alt:"dairy products" },
        {title:'Packaged Food', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNb9vxv06Rpy0gtfipnfdeB68aADXPvgur6-3k2wWZA&s", alt:"Packaged Food" },
        {title:'Cold Drinks & Juices', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNfyv6ZG9i_NBMkJupalsRxc6k9Fv7zK8oPYzeQNJ1g&s", alt:"Cold Drinks & Juices" },
        {title:'Sweet Cravings', url:"https://cleanfoodcrush.com/wp-content/uploads/2018/11/How-to-End-Late-Night-Sugar-Cravings.jpg", alt:"Sweet Cravings" },
        {title:'Biscuits & Cookies', url:"https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2021/03/Difference-Between-Cookies-and-Biscuits.jpg", alt:"Biscuits & Cookies" },
        {title:'Tea, Coffee & More', url:"https://dailygroceryshop.com/wp-content/uploads/2020/10/Newscapfe-300x300.jpg", alt:"Tea, Coffee & More" },
        {title:'Cleaning Essentials', url:"https://5.imimg.com/data5/SELLER/Default/2022/10/NK/DL/UX/1651149/household-cleaning-products-formulation-consulting.jpeg", alt:"Cleaning Essentials" },
        {title:'Home Needs', url:"https://saltandpepperretail.com/wp-content/uploads/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/0/10000/thumb900x900/1203842107/exo-safai-scrubber.jpg", alt:"Home Needs" },
        {title:'Hygiene & wellness', url:"https://m.media-amazon.com/images/I/81gogYWizfL.jpg", alt:"Hygiene & wellness" },
        {title:'Baby Care', url:"https://reliefline.net/wp-content/uploads/2019/08/baby-care-kit-1.jpg", alt:"Baby Care" },
        {title:'Stationery & Crafts', url:"https://mikirei.com/uploads/88fb74b5a5cf7c8f4086af3df36ea9c2cf690d8f.jpg", alt:"tationery & Crafts" },
        {title:'Grooming Essentials', url:"https://reliefline.net/wp-content/uploads/2019/08/baby-care-kit-1.jpg", alt:"Grooming Essentials" },
        {title:'Meats, Fish & Eggs', url:"https://onandoffketo.com/wp-content/uploads/2020/09/Eggs-and-Meat.jpg", alt:"Meats, Fish & Eggs" },
    ]
    res.render('dashboard',{Items});
});
app.use((req,res)=>{
        console.log(req.url);
        res.status(404).render('404',{title: req.url});
});