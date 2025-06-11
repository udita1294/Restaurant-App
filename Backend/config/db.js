const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://udita1294:Udits%4038591112@cluster0.acruhjr.mongodb.net/restaurant-app").then(()=>console.log("DB connected"));
}

module.exports = connectDB ;