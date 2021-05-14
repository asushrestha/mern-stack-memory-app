
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const postRoutes = require('./routes/postroutes.js')

app.use(express.json({limit:"30mb",extended:true}));
app.use(cors());

app.use("/posts",postRoutes);

const CONNECTION_URL = 'mongodb+srv://asushrestha:slap4msth@merncluster.ilnha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=> console.log(`Server running on the port ${PORT}`)))
    
    .catch((error)=> console.log(error.message));
mongoose.set("useFindAndModify",false);