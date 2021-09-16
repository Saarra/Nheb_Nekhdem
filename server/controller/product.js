const Product=('../Models/Product')


//add product

exports.addProduct=async(req,res)=>{
    
    try {
        const newproduct=new Product({
            title,description,image
        })
        await newproduct.save()
        res.status(200).send({msg:"product added",newproduct})
    } catch (error) {
        res.status(500).send({msg:"impossible to add product",error})
    }
}
exports.getProduct=async(req,res)=>{
    const {ID}=req.params
    try {
        const product=await Product.findById(ID)
        res.status(200).send({msg:"product",product})
    } catch (error) {
        res.status(500).send({msg:"impossible to get product",error})
    }
}

exports.updateProduct=async(req,res)=>{
  const {ID}=req.params
    try {
       const product=await Product.findByIdAndUpdate(ID,{$set:{...req.body}})
       res.status(200).send({msg:"product updated"})
    } catch (error) {
        res.status(500).send({msg:"impossible to update product",error})
    }
}

exports.deleteProduct=async(req,res)=>{
    const {ID}=req.params
    try {
        const product=await Product.findByIdAndDelete(ID)
        res.status(200).send({msg:"product deleted"})
    } catch (error) {
        res.status(500).send({msg:"impossible to delete product",error})
    }
}

exports.getallProduct=async(req,res)=>{

    try {
        const products= await Product.find()
        res.status(200).send({msg:"products",products})
    } catch (error) {
        res.status(500).send({msg:"impossible to get all contacts",error})
    }
}