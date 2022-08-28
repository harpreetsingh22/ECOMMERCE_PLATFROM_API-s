import mongoose from 'mongoose'    ;

const productSchema=mongoose.Schema({
   name:String ,
   name:Number
})

const product=mongoose.model('product',productSchema)  ;

export default product ;