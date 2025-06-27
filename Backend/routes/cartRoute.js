const express = require('express');
const { addToCart,removeFromcart,getCart} = require("../controllers/cartController");
const authMiddleware = require("../middleware/auth.js");


const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromcart)
cartRouter.post("/get",authMiddleware,getCart)

module.exports = cartRouter;
