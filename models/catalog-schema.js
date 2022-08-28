import mongoose from 'mongoose'    ;

const catalogSchema=mongoose.Schema({
   sellerId:String ,
   productIds:Array
})

const catalog=mongoose.model('catalog',catalogSchema)  ;

export default catalog ;