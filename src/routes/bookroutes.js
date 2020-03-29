const mongoose=require('mongoose');
const bookSchema=require('../model');
const express=require('express');
const route=express.Router();

route.post('/',(req,res)=>{
    const book=new bookSchema(req.body);
    book.save()
    .then((doc)=>{
        res.send("successfully saved");
    })
    .catch(err=>res.status(500).json(err));
}); 

route.delete('/delete/:name',(req,res)=>{
    bookSchema.findOneAndDelete(
        {
            name:req.params.name
        }
    ).then((doc)=>res.send("Successfully deleted"))
    .catch(err=>res.status(500).json(err));
});

route.put('/update/:name',(req,res)=>{
    bookSchema.findOneAndUpdate(
        {
            name:req.params.name
        },
        {
            name:req.body.name,
            author:req.body.author,
            price:req.body.price
        },
        {
            new:true
        }
    )
    .then(doc=>res.send("successfully updated"))
    .catch(err=>res.status(500).json(err));
    
    
});

/*route.get('/get/:name',(req,res)=>{
    bookSchema.find({
        name:req.params.name
    })
    .then((doc)=>res.json(doc))
    .catch(err=>res.json(err));
});*/
route.get('/get/',(req,res)=>{
    bookSchema.find()
    .then((doc)=>res.json(doc))
    .catch(err=>res.json(err));
});

module.exports=route;

