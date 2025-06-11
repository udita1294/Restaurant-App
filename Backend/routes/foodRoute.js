const express = require('express');
const {addFood,listfood ,removeFood} = require("../controllers/foodContoller")

const multer = require('multer');

const foodRouter = express.Router();


// image storage engine

const storage = multer.diskStorage({
    destination : "uploads",
    filename : (req,file,callBack) => {
        return callBack(null , `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({       // MIDDLEWARE upload has been created using wwhich we can store image in the upload folder 
    storage : storage
})

foodRouter.post('/add', upload.single("image") ,addFood);
foodRouter.get('/list' ,listfood );
foodRouter.post('/remove',removeFood);


module.exports = foodRouter;