const express=require('express');
const router=express.Router();


router.get('/dashboard',(req,res)=>{
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

module.exports =router;