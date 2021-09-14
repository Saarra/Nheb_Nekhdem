const express=require('express')
const { signUp } = require('../controller/auth')
const router=express.Router()
const {Register,Validator}=require('../middleware/validator')

//desc signup
router.post('/signup',Register,Validator,signUp)

//desc signin
 router.post('/signin',)





module.exports=router