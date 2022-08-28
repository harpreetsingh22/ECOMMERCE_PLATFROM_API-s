import mongoose from 'mongoose'    ;

const userSchema=mongoose.Schema({
   name : String ,
   username :String ,
   password:String,
   email :String ,
   phone :Number ,
   type: String
})

const user=mongoose.model('user',userSchema)  ;

export default user ;