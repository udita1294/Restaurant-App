const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); 
const foodRouter = require('./routes/foodRoute.js');
const userRouter = require('./routes/userRoute.js');
require('dotenv').config();


const app = express();

//middleware
app.use(express.json());
app.use(cors())

// Connect to the database
connectDB(); 

// api endpoint
app.use("/api/food",foodRouter);
app.use("/images" , express.static('uploads'))  // THE UPLOADS FOLDER WILL BE EXPOSED ON THIS ENDPOINT
app.use("/api/user" , userRouter);
app.get('/' , function(req,res){
    res.send("api running");
})

app.listen(4000 , ()=> console.log("server working on http://localhost:4000"))