 // /api/buyer/list-of-sellers

import  express from "express";
import { getSellers,getCatalogBySellerId,createOrderBySellerId } from "../controller/buyer.js";

const buyerRoute=express.Router() ;

buyerRoute.get('/',getSellers);
buyerRoute.get('/catalog/:seller_id',getCatalogBySellerId);
buyerRoute.post('/api/buyer/create-order/:seller_id',createOrderBySellerId)



export default buyerRoute ;