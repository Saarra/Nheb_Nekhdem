const express=require('express')
const { addProduct, getProduct, updateProduct, deleteProduct, getallProduct } = require('../controller/product')
const router=express.Router()



//add product
//req.body
router.post('/',addProduct)

//get product
//req.params
router.get('/',getProduct)

//update product
// req.params
router.put('/',updateProduct)

//delete product
// req.params
router.delete('/',deleteProduct)

//getall product

router.get('/',getallProduct)

module.exports=router