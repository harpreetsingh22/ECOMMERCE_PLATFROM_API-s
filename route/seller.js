import  express from "express";
import { createCatalog,getOrdersBySellerId } from "../controller/seller.js";

const sellerRoute=express.Router() ;

sellerRoute.post('/api/seller/create-catalog/:seller_id',createCatalog);
sellerRoute.get('/api/seller/orders/:seller_id',getOrdersBySellerId)

export default sellerRoute ;