import mongoose from 'mongoose'    ;

const orderSchema=mongoose.Schema({
   buyerId:String ,
   productIds:Array
})

const order=mongoose.model('order',orderSchema)  ;

export default order ;