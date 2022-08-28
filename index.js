import express from 'express'   ;
import mongoose from 'mongoose'   ;
import cors from 'cors' ;
import bodyParser from 'body-parser';
import userRoute from './route/user.js';
import buyerRoute  from './route/buyer.js';
import sellerRoute  from './route/seller.js';
import dotenv from 'dotenv' ;

dotenv.config()
const URL=`mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@cluster0.cerwrf4.mongodb.net/?retryWrites=true&w=majority`
const app=express()  ;
const PORT=process.env.PORT ;

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/',userRoute) ;
app.use('/',buyerRoute) ;
app.use('/',sellerRoute);

 mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})