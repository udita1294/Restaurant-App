const userModel = require("../models/userModel.js");

// ADD ITEM TO USER CART
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({
        success : true,
        message : "Added to Cart"
    })
  } catch (error) {
    console.log(error)
    res.json({
        success : false,
        message :"Error"
    })
  }
};

//REMOVE ITEM FROM USER CART
const removeFromcart = async (req, res) => {};

//FETCH USER CART DATA
const getCart = async (req, res) => {};

module.exports = {
  addToCart,
  removeFromcart,
  getCart,
};
