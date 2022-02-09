const mongoose = require('mongoose');

//Connecting to db

mongoose.connect('mongodb://localhost/api-rest-node-mongo',{useNewUrlParser: true})
.then((db)=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
});