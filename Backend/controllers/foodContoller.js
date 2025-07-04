const foodModel = require('../models/foodModel.js');
const fs = require('fs');

// add food items
const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name :  req.body.name ,
        description : req.body.description , 
        price : req.body.price,
        category : req.body.category ,
        image : image_filename
    })

    try {
        await food.save();
        res.json({
            success : true ,
            message : "Food added"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success : false , 
            message : "Error"
        })
    }
}

// TO LIST ALL THE FOOD ITEMS 

const listfood = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({
            success : true,
            data : foods
        })
    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Error"
        })
    }
}

// TO REMOVE FOOD ITEMS

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            message : "Food removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message : "Error"
        })
    }
}

module.exports = {
    addFood : addFood ,
    listfood : listfood,
    removeFood : removeFood
}