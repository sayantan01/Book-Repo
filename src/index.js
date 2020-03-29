const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const mongoose=require('mongoose'); //ODM(Object document modelling)library for MongoDB

let PORT=process.env.PORT||8080;

const uri="mongodb+srv://sayantan:mydatabase0@cluster0-ve4hp.gcp.mongodb.net/test?retryWrites=true&w=majority";   //uniform resource identifier=URL+URN
mongoose.connect(process.env.MONGODB_URI||uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false})
    .catch((err)=>console.log(err));
mongoose.connection.once('open',()=>console.log('successfully connected to db'));

const rootRoute=require('./routes/rootroutes');
const bookRoute=require('./routes/bookroutes');

app.use('/',rootRoute);
app.use(bodyParser.json());

app.use('/book',bookRoute);
app.all('*',(req,res)=>{
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT,()=>console.log(`server up on port ${PORT}`));