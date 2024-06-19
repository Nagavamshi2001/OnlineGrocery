const express=require('express');
const router=express.Router();

const Items=require('../models/items');

router.get('/items/:dynamic', (req, res) => {
    const dynamicValue = req.params.dynamic;
    Items.find({ 
        category: dynamicValue,
        itemcount: { $gt: 0 }    
    })
    .sort({ title: 1 })
    .then((result) => {
        res.render('items', { blogs: result, dynamicValue });
    })
    .catch((err) => {
        console.log(err);
    });
});
router.get('/save-items', (req, res) => {
    res.render('saveItems');
});

router.post('/save-items', (req, res) => {
    console.log(req);
    const item_list = {
        title: req.body.title,
        description: req.body.description,
        ActualPrice: req.body.ActualPrice,
        discount: req.body.discount,
        Price: req.body.Price,
        imagelink: req.body.imagelink,
        category: req.body.category,
        itemcount: req.body.itemcount,
    };

    const item = new Items(item_list);
    item.save()
        .then((result) => {
            res.redirect('/save-items');
        })
        .catch((err) => console.log(err));
});
module.exports =router;