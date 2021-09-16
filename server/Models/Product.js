const mongoose=require('mongoose')
const schema=mongoose.schema

const productSchema=new schema ({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:Image,required:true},
    price:{type:String,required:true}
})

module.exports=mongoose.model('Product',productSchema)