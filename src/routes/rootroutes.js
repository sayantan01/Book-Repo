const express=require('express');
const route=express.Router();
const path=require('path');

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

route.get('/post',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/post.html'));
});

route.get('/delete',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/delete.html'));
});

route.get('/update',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/update.html'));
});

route.get('/get',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/get.html'));
});

module.exports=route;