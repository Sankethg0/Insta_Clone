const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./config/keys');

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB")
});
mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to mongDB",err);
});

require('./models/user');
require('./models/post');

app.use(express.json())
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));


app.listen(PORT,()=>{
    console.log("sever running in PORT",PORT);
})

