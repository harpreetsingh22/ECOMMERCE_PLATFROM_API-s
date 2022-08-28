import { request, response } from "express";
import catalog from "../models/catalog-schema.js";
import order from "../models/order-schema.js"


export const createCatalog=async(request,response)=>{
   const sellerId=request.params.seller_id ;
   const {productIds}=request.body ;
    try{
        const newCatalog = new catalog({sellerId,productIds});
        await newCatalog.save();
        response.status(201).json({message:"catalog created!!"}); }

   catch(error){
    response.status(404).json({ message: error.message })
    }
}

export const getOrdersBySellerId=async(request,response)=>{
    const sellerId=request.params.seller_id ;
     try{
         const orders = await order.find({seller_id:sellerId})
         response.status(200).json(orders) }
 
    catch(error){
     response.status(404).json({ message: error.message })
     }
 }