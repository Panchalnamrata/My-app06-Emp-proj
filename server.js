// 1. include all modules

const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');
const dbconfig=require('./DB');
const apiEmpRoute=require('./server/api-employee.route');
const app=express();

//2. config of database
// database connectivity
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(  //then() == finally()
    ()=>console.log("Database connected"),
    (err)=>console.log("Failed to conect db")
);

//3. handling app static resource and api call
app.use(bodyparser.json()); //json handling
app.use(cors());

//path.join identifies the hierarchy path
//public: folder which contains all static resources
//When server runs, it will host --> [.html,.jpg,.png,.css,.js] will be kept in one folder called public
app.use(express.static(path.join(__dirname,'public')));

//Indication of server start:
app.get('/',(req,resp)=>{
   // resp.send("Welcome to express");
   resp.sendFile("inde.html");
});

//to call apiEmployee route
app.use('/emp',apiEmpRoute); // for internal routing
//4. to start server:
app.listen(4000,()=>{console.log("Server Listening at 4000")});