const express=require('express');
const router=express.Router();


router.get('/cart',(req,res)=>{
    // console.log(req.cookies.cartitems);
    const cartItems = req.cookies.cartitems ? JSON.parse(req.cookies.cartitems) : [];
    console.log(cartItems);
    res.render('cart',{cartItems});
});

module.exports =router;