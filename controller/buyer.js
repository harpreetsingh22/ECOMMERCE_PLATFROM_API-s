import { request, response } from "express";
import catalog from "../models/catalog-schema.js";
import order from "../models/order-schema.js";


export const getSellers=async(request,response)=>{
    try{
        const sellers = await user.find({type:"seller"}) ;
        response.status(200).json(sellers); }

   catch(error){
    response.status(404).json({ message: error.message })
    }
}

export const getCatalogBySellerId=async(request,response)=>{
    const sellerId=request.params.seller_id  ;
    console.log("sellerId",sellerId)
    try{
        const Catalog = await catalog.findOne({seller_id:sellerId}) ;

         if(!Catalog)
         response.status(404).json({message:`Not catalog exist with this seller_id : ${sellerId}`});

      response.status(200).json(Catalog); }

   catch(error){
    response.status(404).json({ message: error.message })
    }
}

export const createOrderBySellerId=async(request,response)=>{
    const sellerId=request.params.seller_id  ;
    const productIds = request.body.productIds;
    try{
       const newOrder = new order({productIds, sellerId});
        await newOrder.save();

      response.status(200).json({message:"order_created"}); }

   catch(error){
    response.status(404).json({ message: error.message })
    }
}