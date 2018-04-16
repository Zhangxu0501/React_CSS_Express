var express = require('express');
var router = express.Router();


router.get('/css_director',function(req,res,next){
    res.render('css_director.ejs',{});
});

router.get('/css_style',function(req,res,next){
    res.render('css_style.ejs',{});
});
 router.get('/css_box_modle',function(req,res,next){
     res.render('css_box_modle.ejs',{});
 });
 router.get('/css_position',function(req,res,next){
     res.render('css_position.ejs',{});
 });
module.exports=router;